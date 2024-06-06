import { getMongoCollection } from "./mongodb";
const db = "ulissesdb";
const COLLECTION = "users";
const COLLECTION1 = "horasMarcadas";

export async function createUser(user) {
  const collection = await getMongoCollection(db, COLLECTION);
  const result = await collection.insertOne(user);
  return result;
}

export async function findUserByEmail(email) {
  const collection = await getMongoCollection(db, COLLECTION);
  const result = await collection.findOne({ email: email });
  return result;
}

export async function findAllUsersHour() {
  const collection = await getMongoCollection(db, COLLECTION1);
  const result = await collection.find().toArray();
  return result;
}