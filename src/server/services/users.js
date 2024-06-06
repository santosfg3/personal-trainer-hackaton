import { findUserByEmail } from "../data/CRUD";

export async function getUserByEmail(email) {
  const result = await findUserByEmail(email);
  if (result == null) return result;

  return result;
}


export async function createDataUser({ email, password }) {
  return {
    email: email,
    password: password,
  };
}
