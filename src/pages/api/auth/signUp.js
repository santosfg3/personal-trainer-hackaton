

import { createUser, findUserByEmail } from "@/server/data/CRUD";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body; // Ajustar aqui para 'name'
    console.log(req.body);
    console.log(await findUserByEmail(email));
    if ((await findUserByEmail(email)) === null) {
      try {
        const result = await createUser({ name, email, password }); // Use 'name' em vez de 'nome'
        res.status(200).json({ result });
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).json({ message: "Erro ao criar usuário." });
      }
    } else {
      res.status(400).json({ message: "E-mail já está sendo usado." });
    }
  } else {
    res.status(405).json({ message: "Método não permitido." });
  }
};


// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, password } = req.body;

//     // Validação dos campos no backend
//     if (!name || !email || !password) {
//       return res.status(400).json({ message: 'All fields are required.' });
//     }

//     try {
//       const result = await createUser({ name, email, password });

//       if (!result) {
//         return res.status(400).json({ message: 'Error creating user.' });
//       }

//       return res.status(200).json({ message: 'User created successfully.' });
//     } catch (error) {
//       console.error('Error in user creation:', error);
//       return res.status(500).json({ message: 'Internal server error.' });
//     }
//   } else {
//     return res.status(405).json({ message: 'Method not allowed.' });
//   }
// }