import { findUserByEmail, findUserById } from "../data/CRUD";

export async function getUserByEmail(email) {
  const result = await findUserByEmail(email);
  if (result == null) return result;

  return result;
}


export async function createDataUser({ email, password }) {
  return {
    name: "",
    email: email,
    password: password,
    telefone: "",
    peso: "",
    altura: "",
    idade: ""
  };
}

export async function user(id) {
  const result = await findUserById(id);
  if (result.length === 0) return false;

  return result;
}
