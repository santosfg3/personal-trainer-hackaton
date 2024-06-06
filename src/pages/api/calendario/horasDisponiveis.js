import { ulissesEvents } from "@/server/services/userHora";

export default async (req, res) => {
  const eventos = await ulissesEvents();
  if (eventos.length === 0) {
    res.status(400).json({ message: "n deu" });
  }
  res.status(200).json(eventos);
};
