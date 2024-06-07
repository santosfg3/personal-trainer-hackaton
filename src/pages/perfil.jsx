import React, { useEffect, useState } from "react";
import styles from "../styles/perfil.module.css";
import useAnimateValue from "../pages/hooks/useAnimateValue";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const Perfil = () => {
//   useAnimateValue("peso", 0, 70, 2000);
//   useAnimateValue("altura", 0, 175, 2000);
//   useAnimateValue("anos", 0, 30, 2000);

  const router = useRouter();
  const [updateUser, setUser] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    peso: "",
    altura: "",
    idade: "",
  });

  useEffect(() => {
    async function handleProfile() {
      const token = localStorage.getItem("token");
      if (token === null) {
        router.push("/");
      }
      try {
        const res = await fetch(`/api/${token}`);
        console.log(res);
        if (res.status === 200) {
          const profile = await res.json();
          console.log(profile);
          setFormData({
            name: profile[0]?.name || "",
            email: profile[0]?.email || "",
            telefone: profile[0]?.telefone || "",
            peso: profile[0]?.peso || "",
            altura: profile[0]?.altura || "",
            idade: profile[0]?.idade || "",
          });
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
    handleProfile();
  }, [updateUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(handleChange);

  const handleSubmit = async (e) => {
    const id = localStorage.getItem("token");
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        id: id,
        ...formData,
      }),
    };
    const res = await fetch(`/api/updateUser`, options);

    if (res.status === 200) {
      const updatedProfile = await res.json();
      setFormData(updatedProfile);
      setUser(!updateUser);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>Perfil</div>
      <div className={styles.profilePic}></div>
      <div className={styles.changePhoto}>Alterar foto</div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          className={styles.formInput}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className={styles.formInput}
          type="tel"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
        />

        <div className={styles.numericContainer}>
          <div className={styles.numericBox}>
            <input
              className={styles.numericInput}
              type="number"
              name="peso"
              id="peso"
              placeholder="0"
              value={formData.peso}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="peso">
              Kg
            </label>
          </div>
          <div className={styles.numericBox}>
            <input
              className={styles.numericInput}
              type="number"
              name="altura"
              id="altura"
              placeholder="0"
              value={formData.altura}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="altura">
              cm
            </label>
          </div>
          <div className={styles.numericBox}>
            <input
              className={styles.numericInput}
              type="number"
              name="idade"
              id="idade"
              placeholder="0"
              value={formData.idade}
              onChange={handleChange}
            />
            <label
              className={styles.label}
              htmlFor="anos"
              onChange={handleChange}
            >
              anos
            </label>
          </div>
            <div className={styles.numericContainer}>
                <div className={styles.numericBox}>
                    <input className={styles.numericInput} type="number" id="peso" placeholder="0" required />
                    <label className={styles.label} htmlFor="peso">Kg</label>
                </div>
                <div className={styles.numericBox}>
                    <input className={styles.numericInput} type="number" id="altura" placeholder="0" required />
                    <label className={styles.label} htmlFor="altura">cm</label>
                </div>
                <div className={styles.numericBox}>
                    <input className={styles.numericInput} type="number" id="anos" placeholder="0" required />
                    <label className={styles.label} htmlFor="anos">anos</label>
                </div>
            </div>
                <div><button className={styles.buttonLogOut} >Logout</button></div>
                <Navbar/>
        </div>
        <div>
          <button className={styles.buttonLogOut} onClick={() => logOut()}>
            Logout
          </button>
        </div>
        <div>
          <button className={styles.buttonSave} type="submit ">
            save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Perfil;
