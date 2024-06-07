import CardAgendamento from "@/components/CardAgendamento"
import Navbar from "@/components/Navbar"

export default function Teste() {
    const userID = 1
    return (
        <div>
            <div>
                <CardAgendamento userID={userID}/>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
        )
}