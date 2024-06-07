import Image from 'next/image';
import styles from "@/styles/Home.module.css"
import NotificationIcon from "../../public/icons/NotificationIcon"
import PesoIcon from '../../public/icons/PesoIcon';
import AlturaIcon from '../../public/icons/AlturaIcon';
import IdadeIcon from '../../public/icons/IdadeIcon';
import CompleteWeek from './CompleteWeek';
import CardAgendamento from './CardAgendamento';


export default function Home() {
    const usuario = {
        nome: 'Mateus',
        foto: '/assets/profile-foto.png',
        peso: 75,
        altura: 173,
        idade: 25,
    };
    const userId = 1

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image src={usuario.foto} alt={usuario.nome} width={60} height={60} />
                <h1 className={styles.personalInfos}>Olá, <br /> <span>{usuario.nome}!</span></h1>
                <NotificationIcon />
            </div>
                <h1 className={styles.title}>Transforme seus objetivos em conquistas</h1>
            <div className={styles.boxInfos}>
                <div className={styles.selfInfos}>
                    <PesoIcon />
                    <span>{usuario.peso} KG</span>
                    <p>Peso</p>
                </div>
                <div className={styles.selfInfos}>
                    <AlturaIcon />
                    <span>{usuario.altura} cm</span>
                    <p>Altura</p>
                </div>
                <div className={styles.selfInfos}>
                    <IdadeIcon />
                    <span>{usuario.idade} anos</span>
                    <p>Idade</p>
                </div>
            </div>
            <div className={styles.weekCheck}>
                <h2 className={styles.subtitle}>Sua semana de treinos</h2>
                <CompleteWeek />
            </div>
            <div> 
                <CardAgendamento  userId={userId}/>
            </div>
        </div>
    )
}