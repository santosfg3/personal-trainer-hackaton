import React from "react";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"
import { useRouter } from "next/router";
import HomeIcon from "../../public/icons/HomeIcon";
import ProfileIcon from "../../public/icons/ProfileIcon";
import CalendarIcon from "../../public/icons/CalendarIcon";

export default function Navbar() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <nav
                className={styles.navbar}
            >
                <Link href="/home">
                    <div className={styles.navItem}>
                        <HomeIcon color={router.pathname === "/home" ? "#29E33C" : "#A5A5A7"} />
                    </div>
                </Link>

                <Link href="/agenda">
                    <div className={styles.navItem}>
                        <CalendarIcon color={router.pathname === "/agenda" ? "#29E33C" : "#A5A5A7"} />
                    </div>
                </Link>

                <Link href="/perfil">
                    <div className={styles.navItem}>
                        <ProfileIcon
                            color={router.pathname === "/perfil" ? "#29E33C" : "#A5A5A7"} />
                    </div>
                </Link>
            </nav>
        </div>
    );
};