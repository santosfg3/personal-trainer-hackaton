import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/agenda.module.css";
import { fecthAllHoursAvailable, fetchEventos } from "../../logic/fetch";

export default function Events() {
  const [events, setEvents] = useState();
  const router = useRouter();

  const hoursByDay = async () => {
    const fetch = await fecthAllHoursAvailable();
    setEvents(fetch);
  };

  // events.map((e) => e.imagemUrl)

  return (
    <main>
      <div>
        <h1>Agenda</h1>
        <button className={styles.button} onClick={() => hoursByDay()}>
          S
        </button>
        {events?.map((e) => (
          <div>{e.horas}</div>
        ))}
      </div>
    </main>
  );
}
