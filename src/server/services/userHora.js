import { findAllUlissesHour, findAllUsersHour } from "../data/CRUD";

export async function userEvents() {
  const horasMarcadas = await findAllUsersHour();
  return horasMarcadas.map((e) => ({
    horas: e.horas,
    diaDaSemana: e.diaDaSemana,
    diaDoMes: e.diaDoMes,
    userId: e.userId
  }));
}


export async function ulissesEvents(weekDay) {
  const horasMarcadas = await findAllUlissesHour();
  return horasMarcadas.filter((e) => (
    weekDay === e.diaDaSemana &&
    {
    horas: e.horas,
    diaDaSemana: e.diaDaSemana,
    diaDoMes: e.diaDoMes
  }));

  
}
