import { createUser, findUserByEmail } from "@/server/data/CRUD";

export default async (req, res) => {
  if (req.method === "POST") {
    const { nome, email, password } = req.body;
    console.log(req.body);
    console.log(await findUserByEmail(email));
    if ((await findUserByEmail(email)) === null) {
      const result = await createUser(req.body);
      res.status(200).json({ result });
    }
  }
  res.status(401).json({ message: "error" });
};
