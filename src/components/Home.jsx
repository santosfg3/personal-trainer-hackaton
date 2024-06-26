import Image from "next/image";
import styles from "@/styles/Home.module.css";
import NotificationIcon from "../../public/icons/NotificationIcon";
import PesoIcon from "../../public/icons/PesoIcon";
import AlturaIcon from "../../public/icons/AlturaIcon";
import IdadeIcon from "../../public/icons/IdadeIcon";
import CompleteWeek from "./CompleteWeek";
import CardAgendamento from "./CardAgendamento";
import { fetchUserInfo } from "../../logic/fetch";
import { useState, useEffect } from "react";


export default function Home() {
  const [medidas, setMedidas] = useState([]);
  const usuario = {
    nome: "Diogo",
    foto: "/assets/profile-foto.png",
    peso: 75,
    altura: 173,
    idade: 25,
  };
  const userId = 1
  let token;

  useEffect(() => {
    if (localStorage) {
      token = localStorage.getItem("token");
    }
  }, []);
  //   const token = "localStorage.getItem(token)";

  useEffect(() => {
    async function fetchData() {
      const res = await fetchUserInfo(token);
      setMedidas(res);
      console.log(res);
    }
    fetchData();
  }, [token]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src={usuario.foto} alt={usuario.nome} width={60} height={60} />
        <h1 className={styles.personalInfos}>
          Olá, <br /> <span>{usuario.nome}!</span>
        </h1>
        <NotificationIcon />
      </div>
      <h1 className={styles.title}>Transforme seus objetivos em conquistas</h1>
      {medidas.length > 0 ? (
        medidas.map((e, index) => (
          <div key={index} className={styles.boxInfos}>
            <div className={styles.selfInfos}>
              <PesoIcon />
              <span>{e.peso} KG</span>
              <p>Peso</p>
            </div>
            <div className={styles.selfInfos}>
              <AlturaIcon />
              <span>{e.altura} cm</span>
              <p>Altura</p>
            </div>
            <div className={styles.selfInfos}>
              <IdadeIcon />
              <span>{e.idade} anos</span>
              <p>Idade</p>
            </div>
          </div>
        ))
      ) : (
        <p>Carregando dados...</p>
      )}
      <div className={styles.weekCheck}>
        <h2 className={styles.subtitle}>Sua semana de treinos</h2>
        <CompleteWeek />
      </div>
      <div> 
      <h2 className={styles.subtitleTwo}>Próximos agendamentos</h2>
      <CardAgendamento userId={userId} />
            </div>
    </div>
  );
}