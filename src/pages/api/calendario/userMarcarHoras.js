import { user } from "@/server/services/users";
import { createEvent } from "@/server/services/userMarcarHoras";
import { update } from "@/server/data/CRUD";

export default async (req, res) => {

  console.log(req.body)
  const { _id } = JSON.parse(req.body);
  if (req.method === "POST") {
    // const userExists = await user(userId);
    // if (!userExists) {
    //   return res.status(404).json({ message: "user não encontrado" });
    // }
    const modifyDate = await update(_id)
    // if (!id) {
    //   return res.status(400).json({
    //     message: "Não foi possivel criar",
    //   });
    // }

    return res.status(200).json({ message:"success"});
  }
  res.status(404).json({ message: "ERROR" });
};
