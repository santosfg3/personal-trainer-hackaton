import { updateDataUser, findUserById } from "@/server/data/CRUD"

export default async(req, res) => {
    console.log(req.body)
    if(req.method === "POST") {
        const a  = await updateDataUser(req.body)
        const obj = await findUserById(req.body.id)
        const updatedData = {
            name: obj[0].name,
            email: obj[0].email,
            telefone: obj[0].telefone,
            peso: obj[0].peso,
            altura: obj[0].altura,
            idade: obj[0].idade}
            
        return res.status(200).json(updatedData)
    }
    res.status(404).json({message: "error"})
}