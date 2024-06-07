import { updateDataUser } from "@/server/data/CRUD"

export default async(req, res) => {
    console.log(req.body)
    if(req.method === "POST") {
        const updatedData = await updateDataUser(req.body)
        
        return res.status(200).json({updatedData})
    }
    res.status(404).json({message: "error"})
}