import { useEffect } from "react";

const useAnimateValue = (id, start, end, duration) => {
    useEffect(() => {
        const animateValue = (id, start, end, duration) => {
            const obj = document.getElementById(id);
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.value = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        };

        animateValue(id, start, end, duration);
    }, [id, start, end, duration]);
};

export default useAnimateValue;
