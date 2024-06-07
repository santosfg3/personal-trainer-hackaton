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
          console.log(profile)
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
  }, []);

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
      setFormData({
        name: updatedProfile.name,
        email: updatedProfile.email,
        telefone: updatedProfile.telefone,
        peso: updatedProfile.peso,
        altura: updatedProfile.altura,
        idade: updatedProfile.idade,
      });
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
          name="telefone"
          id="telefone"
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
              KG
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
              htmlFor="idade"
              onChange={handleChange}
            >
              anos
            </label>
          </div>
        </div>
        <div className={styles.dobleButton}>
          <button className={styles.buttonSave} type="submit">
            Salvar
          </button>
          <button className={styles.buttonLogOut} onClick={logOut}>
            Logout
            <svg width="18" height="18" viewBox="0 0 18 18" fill="#29E33C" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H2V2Z" fill="#29E33C" />
              <path d="M17.65 8.94154L14.86 6.15154C14.7905 6.08009 14.7012 6.03102 14.6036 6.01061C14.506 5.9902 14.4045 5.99937 14.3121 6.03696C14.2198 6.07454 14.1408 6.13883 14.0851 6.2216C14.0295 6.30436 13.9999 6.40183 14 6.50154V8.29154H7C6.45 8.29154 6 8.74154 6 9.29154C6 9.84154 6.45 10.2915 7 10.2915H14V12.0815C14 12.5315 14.54 12.7515 14.85 12.4315L17.64 9.64154C17.84 9.45154 17.84 9.13154 17.65 8.94154Z" fill="#29E33C" />
            </svg>

          </button>
        </div>
        <div>

        </div>
      </form>
      <Navbar />
    </div>
  );
};

export default Perfil;