import { getUserByEmail } from "@/server/services/users";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Passaste um email de um user que na existe" });
    }

    const user = await getUserByEmail(email);
    if (user.password !== password) {
      return res
        .status(401)
        .json({
          message:
            "encontrei o user associado ao email, mas a password esta incorreta",
        });
    }

    res
      .status(200)
      .json({ message: "Login efetuado com sucesso", id: user._id });
  }
};
