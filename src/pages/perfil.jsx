import React, { useEffect, useState } from "react";
import styles from "../styles/perfil.module.css";
import useAnimateValue from "../pages/hooks/useAnimateValue";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const Perfil = () => {
  // useAnimateValue('peso', 0, 70, 2000);
  // useAnimateValue('altura', 0, 175, 2000);
  // useAnimateValue('anos', 0, 30, 2000);

  const router = useRouter();
  const [updateUser, setUpdateUser] = useState(false);
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
      if (!token) {
        router.push("/");
        return;
      }
      try {
        const res = await fetch(`/api/${token}`);
        if (res.status === 200) {
          const profile = await res.json();
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

  const handleSubmit = async (e) => {
    const id = localStorage.getItem("token");
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
        ...formData,
      }),
    };
    const res = await fetch(`/api/updateUser`, options);

    if (res.status === 200) {
      const updatedProfile = await res.json();
      setFormData(updatedProfile);
      setUpdateUser(!updateUser);
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
<<<<<<< HEAD
          required
=======
          
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
        />
        <input
          className={styles.formInput}
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
<<<<<<< HEAD
          required
=======
          
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
        />
        <input
          className={styles.formInput}
          type="tel"
          placeholder="Telefone"
          name="telefone"
          id="telefone"
          value={formData.telefone}
          onChange={handleChange}
<<<<<<< HEAD
          required
=======
          
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
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
<<<<<<< HEAD
              required
=======
              
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
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
<<<<<<< HEAD
              required
=======
              
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
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
              required
            />
<<<<<<< HEAD
            <label className={styles.label} htmlFor="idade">
=======
            <label
              className={styles.label}
              htmlFor="idade"
              onChange={handleChange}
            >
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
              anos
            </label>
          </div>
        </div>
        <div className={styles.dobleButton}>
          <button className={styles.buttonSave} type="submit">
            Salvar
          </button>
<<<<<<< HEAD
          <button className={styles.buttonLogOut} onClick={logOut}>
            LogOut
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
              <path d="M11.65 2.94154L8.86 0.151543C8.79045 0.0800948 8.70117 0.0310242 8.60357 0.0106113C8.50597 -0.00980157 8.4045 -0.000627518 8.31215 0.0369585C8.21979 0.0745445 8.14075 0.138833 8.08515 0.221597C8.02954 0.30436 7.99989 0.401834 8 0.501544V2.29154H1C0.45 2.29154 0 2.74154 0 3.29154C0 3.84154 0.45 4.29154 1 4.29154H8V6.08154C8 6.53154 8.54 6.75154 8.85 6.43154L11.64 3.64154C11.84 3.45154 11.84 3.13154 11.65 2.94154Z" fill="white"/>
            </svg>
=======
        </div>
        <div>
          <button className={styles.buttonSave} type="submit">
            save
>>>>>>> 81075d5d35778ff6b97ffa1384e737b05489789b
          </button>
        </div>
      </form>
      <Navbar />
    </div>
  );
};

export default Perfil;