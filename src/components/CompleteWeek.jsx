import React, { useState } from 'react';
import CheckIcon from '@/../public/icons/CheckIcon';
import styles from "@/styles/CompleteWeek.module.css";

const CompleteWeek = () => {
    const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

    const [completedDays, setCompletedDays] = useState(Array(7).fill(false));

    const toggleCompletion = (index) => {
        const newCompletedDays = [...completedDays];
        newCompletedDays[index] = !newCompletedDays[index];
        setCompletedDays(newCompletedDays);
    };

    return (
        <div className={styles.trainingweek}>
            {weekDays.map((day, index) => (
                <div className={styles.content}>
                    <div key={index} className={styles.trainingday} onClick={() => toggleCompletion(index)}>
                        {completedDays[index] ? <CheckIcon /> : <div className={styles.bullet} />}
                    </div>
                    <div className={styles.days}>{day}</div>
                </div>
            ))}
        </div>
    );
};

export default CompleteWeek;
