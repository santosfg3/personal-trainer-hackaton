import CardAgendamento from "@/components/CardAgendamento"
import Navbar from "@/components/Navbar"

export default function Teste() {
    const userId = 1
    return (
        <div>
            <div>
                <CardAgendamento userId={userId}/>
            </div>
            <div>
                <Navbar />
            </div>
        </div>
        )
}