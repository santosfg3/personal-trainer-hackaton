import { user } from "../../server/services/users";

export default async(req, res) => {
    const {userId} = req.query
    const utilizador = await user(userId);
    if (utilizador == false) {
      return res.status(400).json({message: "nao passou um id valido"});
    }
    return res.status(200).json(utilizador);
  }