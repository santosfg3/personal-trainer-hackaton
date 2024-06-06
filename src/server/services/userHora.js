import { findAllUsersHour } from "../data/CRUD";

export async function filterAllUsers() {
  const eventos = await findAllUsersHour();
  return eventos.map((e) => ({
    horas: e.horas,
    dia: e.dia,
    diaDaSemana: e.diaDaSemana,
  }));
}
