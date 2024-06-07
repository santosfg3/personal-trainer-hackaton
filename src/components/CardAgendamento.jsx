import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from "@/styles/CardAgendamento.module.css";
import CancelIcon from '@/../public/icons/CancelIcon'; 

const CardAgendamento = ({ userId }) => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('/api/userHora');
                const userAppointments = response.data.filter(appointment => appointment.userId === userId);
                setAppointments(userAppointments);
            } catch (error) {
                console.error("Erro ao buscar os agendamentos:", error);
            }
        };
        fetchAppointments();
    }, [userId]);

    const handleCancel = (appointmentId) => {
        // Aqui você pode implementar a lógica para cancelar o agendamento
        console.log(`Cancelar agendamento com id: ${appointmentId}`);
    };

    return (
        <div className={styles.appointmentsContainer}>
            {appointments.map((appointment, index) => (
                <div key={index} className={styles.appointmentCard}>
                    <div className={styles.date}>{appointment.diaDoMes}</div>
                    <div className={styles.info}>
                        <div>{appointment.diaDaSemana}</div>
                        <div>{appointment.horas}</div>
                    </div>
                    <button className={styles.cancelButton} onClick={() => handleCancel(index)}>
                        <CancelIcon />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default CardAgendamento;
