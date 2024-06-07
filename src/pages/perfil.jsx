import React from "react";
import styles from "../styles/perfil.module.css";
import useAnimateValue from "../pages/hooks/useAnimateValue";
import Navbar from "@/components/Navbar";

const Perfil = () => {
    useAnimateValue('peso', 0, 70, 2000);
    useAnimateValue('altura', 0, 175, 2000);
    useAnimateValue('anos', 0, 30, 2000);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>Perfil</div>
            <div className={styles.profilePic}></div>
            <div className={styles.changePhoto}>Alterar foto</div>

            <form className={styles.form}>
                <input className={styles.formInput} type="text" placeholder="Nome" required />
                <input className={styles.formInput} type="email" placeholder="Email" required />
                <input className={styles.formInput} type="tel" placeholder="Telefone" required />
            </form>

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
    );
}

export default Perfil;