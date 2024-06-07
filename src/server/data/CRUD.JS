import { ObjectId } from "mongodb";
import { getMongoCollection } from "./mongodb";
const db = "ulissesdb";
const COLLECTION = "users";
const COLLECTION1 = "horasMarcadas";
const COLLECTION2 = "horas"

// export async function insertEvent(data) {
//   const collection = await getMongoCollection(db, COLLECTION2);
//   const result = await collection.insertOne(data);
//   return result.insertedId;
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////USER//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

export async function findAllUlissesHour() {
  const collection = await getMongoCollection(db, COLLECTION2);
  const result = await collection.find().toArray();
  return result;
}


export async function findUserById(id) {
    const newID = new ObjectId(String(id));
    const collection = await getMongoCollection(db, COLLECTION);
    const result = await collection.find({ _id: newID }).toArray();

    return result;
}

export async function update(id) {
  console.log(id)
    
    const collection = await getMongoCollection(db, COLLECTION2);
    const result = await collection.updateOne({ _id: new ObjectId(String(id)) },
  {$set: {marcado: true}}
  
  );

    return result;
}



//11
//0
//"11h00"
//

export async function createUser(user) {
  const collection = await getMongoCollection(db, COLLECTION);
  const result = await collection.insertOne(user);
  return result;
}

export async function insertEvent(data) {
  const collection = await getMongoCollection(db, COLLECTION1);
  const result = await collection.insertOne(data);
  return result.insertedId;
}

export async function updateDataUser({id, name, email, telefone, peso, altura, idade}) { 
  console.log(id, name, email, telefone, peso, altura, idade)
  const collection = await getMongoCollection(db, COLLECTION);
  const result = await collection.updateOne({
      _id: new ObjectId(String(id))
  },
      {
          $set: {
              name: name,
              email: email,
              telefone: telefone,
              peso: peso,
              altura: altura,
              idade: idade,

          }
      })
  return result
}