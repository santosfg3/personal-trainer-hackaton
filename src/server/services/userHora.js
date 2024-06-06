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
export async function ulissesEvents() {
  const horasMarcadas = await findAllUlissesHour();
  return horasMarcadas.map((e) => ({
    horas: e.horas,
    diaDaSemana: e.diaDaSemana,
    dia: e.dia
  }));
}
