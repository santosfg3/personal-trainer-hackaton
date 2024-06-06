import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/agenda.module.css";
import { fecthAllHoursAvailable, fetchEventos } from "../../logic/fetch";
import { weekDays } from "../../logic/arrayWeekDays";
import { dayOfftheWeek } from "../../logic/dayOfTheWeek";
import { CLIENT_PUBLIC_FILES_PATH } from "next/dist/shared/lib/constants";


export default function Events() {
  const [events, setEvents] = useState();
  const [days, setWeekDays] = useState(weekDays)
  const [conf, setConf] = useState(false)
  const [style, setStyle] = useState()
  const [confirmation, setConfirmation] = useState(true)
  const [weekDayClicked, setWeekDayClicked] = useState()
  const router = useRouter();

  const hoursByDay = async (i) => {
    setWeekDayClicked(i)
    const weekLength = dayOfftheWeek(i)
    const days = await fecthAllHoursAvailable(weekLength);
    setEvents(days);
    
  };


  const boockedHours = async (e) => {
    console.log(e)
    const options = {method: "POST", headers: { "Content-Type": "aplication/json" }, body: JSON.stringify(e)}
    const res = await fetch("/api/calendario/userMarcarHoras", options)
    if(res.status === 200) {
      setConfirmation(false)
    }
  };


  // events.map((e) => e.imagemUrl)
  (events?.map((e,i,arr) => console.log(typeof arr.indexOf(e))))
  return (
    <main>
      <div className={styles.container}>
        <h1>Agenda</h1>
        <div className={styles.containerButtons}>
        {days?.map((e, i) => 
        <button className={weekDayClicked === i ? styles.button : styles.notPressedButton} onClick={() => hoursByDay(i)}>
          {e}
        </button>)}
        </div>
        {confirmation ? events?.map((e, i, arr) => (
          
          <div className={styles.fatherContainer}>
          <div className={e.marcado === true ? `${styles.booked}`: conf && i == style ? `${styles.containerPlusConfirmed}` : `${styles.horas}`} onClick={() => {setConf(!conf); setStyle(i)}}>
            <div/>
          {e.horas}
          
            {e.marcado === false && conf && i == style && <button className={styles.confirm} onClick={() => boockedHours(e)}>
              confirmar
            </button> }
              </div>
        </div>
          
        )) : <div className={styles.aulaMarcada}>Aula marcada</div> }
      </div>
    </main>
  );
}
