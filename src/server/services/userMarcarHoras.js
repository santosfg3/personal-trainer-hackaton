import { insertEvent } from "../data/CRUD";

export async function createEvent(data) {
  const id = await insertEvent(data);
  if (id) return id;
  return undefined;
}
