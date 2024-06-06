//motivationform.jsx

// components/MotivationForm.js
import React, { useState } from "react";
import styles from "../styles/marcarHoras.module.css"
import { useRouter } from "next/router";

// localStorage.setItem("userId", "safaguih32uu21")
// localStorage.getItem("userId")

export default function MotivationForm() {
  const [useProfileData, setUseProfileData] = useState(false);
  const [motivationalLetter, setMotivationalLetter] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    const res = await fetch("/api/user/marcarHoras", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        data: motivationalLetter,
        eventId: router.query.offer,
        userId: "664e0391179116f43c5abbf0",
      }),
    });
    const id = await res.json();
    
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Motivational Letter</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <button
            id="motivationalLetter"
            className={styles.hours}
            value={"11:00"}
          >11:00</button>
        </div>
        <button
          type="submit"
          className={styles.submitButton}
          onClick={() => router.push("./sucssessSubmit")}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
