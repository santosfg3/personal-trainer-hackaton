import { user } from "../../server/services/users";

export default async(req, res) => {
    const {userid} = req.query
    const utilizador = await user(userid);
    if (utilizador == null) {
      return res.status(400).json({message: "nao passou um id valido"});
    }
    

    if (utilizador.length === 0) {
      return res.status(400).json({message: "nenhum objeto encotrado"});
    }
    return res.status(200).json(utilizador);
  }