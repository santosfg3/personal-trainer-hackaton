import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/agenda.module.css";
import { fecthAllHoursAvailable, fetchEventos } from "../../logic/fetch";
import { weekDays } from "../../logic/arrayWeekDays";
import { dayOfftheWeek } from "../../logic/dayOfTheWeek";
import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";
import Navbar from "@/components/Navbar";



export default function Events() {
  const [events, setEvents] = useState();
  const [days, setWeekDays] = useState(weekDays);
  const [conf, setConf] = useState(false);
  const [style, setStyle] = useState();
  const [confirmation, setConfirmation] = useState(true);
  const [weekDayClicked, setWeekDayClicked] = useState();
  const [activeButton, setActiveButton] = useState(null); // Estado para controlar o botão ativo
  const router = useRouter();

  const hoursByDay = async (i) => {
    setWeekDayClicked(i);
    const weekLength = dayOfftheWeek(i);
    const days = await fecthAllHoursAvailable(weekLength);
    setEvents(days);
  };

  const boockedHours = async (e) => {
    console.log(e);
    const options = {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(e),
    };
    const res = await fetch("/api/calendario/userMarcarHoras", options);
    if (res.status === 200) {
      setConfirmation(false);
    }
  };

  // Atualiza o estado para o botão ativo
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  // events.map((e) => e.imagemUrl)
  events?.map((e, i, arr) => console.log(typeof arr.indexOf(e)));
  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.profileHeader}>Agenda</h1>
        <div className={styles.buttonGroup}>
          {/* Aplicando a classe 'active' se o botão estiver ativo */}
          <button
            id="button1"
            className={`${styles.buttonBox} ${activeButton === "button1" ? styles.active : ""
              }`}
            onClick={() => {
              handleButtonClick("button1");
              // Lógica adicional aqui, se necessário
            }}
          >
            Recorrente
          </button>
          <button
            id="button2"
            className={`${styles.buttonBox} ${activeButton === "button2" ? styles.active : ""
              }`}
            onClick={() => {
              handleButtonClick("button2");
              // Lógica adicional aqui, se necessário
            }}
          >
            Individual
          </button>
        </div>
        <div className={styles.containerButtons}>
          {days?.map((e, i) => (
            <button
              className={
                weekDayClicked === i ? styles.button : styles.notPressedButton
              }
              onClick={() => hoursByDay(i)}
            >
              {e}
            </button>
          ))}
        </div>
        {confirmation ? (
          events?.map((e, i, arr) => (
            <div className={styles.fatherContainer}>
              <div
                className={
                  e.marcado === true
                    ? `${styles.booked}`
                    : conf && i == style
                      ? `${styles.containerPlusConfirmed}`
                      : `${styles.horas}`
                }
                onClick={() => {
                  setConf(!conf);
                  setStyle(i);
                }}
              >
                <div />
                {e.horas}

                {e.marcado === false && conf && i == style && (
                  <button
                    className={styles.confirm}
                    onClick={() => boockedHours(e)}
                  >
                    Confirmar
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.aulaMarcada}>
            <p className={styles.inforConfirmation}>Aula reservada com sucesso!</p>
            <svg onClick={() => router.push('/home')} xmlns="http://www.w3.org/2000/svg" width="108" height="107" viewBox="0 0 108 107" fill="none">
              <path d="M54 93.625C76.1604 93.625 94.125 75.6604 94.125 53.5C94.125 31.3396 76.1604 13.375 54 13.375C31.8396 13.375 13.875 31.3396 13.875 53.5C13.875 75.6604 31.8396 93.625 54 93.625Z" stroke="#29E33C" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M36.1667 53.5L49.5417 66.875L71.8334 44.5833" stroke="#29E33C" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <Navbar />
    </main>
  );
}
