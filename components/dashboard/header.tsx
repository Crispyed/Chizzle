"use client"

import styles from "@/styles/dashboard/components/header.module.scss";
import Link from "next/link";

export default function DashboardHeader({ slug }: { slug: string }) {
    return (
        <header className={styles.container}>
            <Link href={`/${slug}`} className={styles.titleContainer}>
                <h1 className={styles.title}><strong>{slug}</strong>'s</h1>
                <h1 className={styles.title}>Dashboard</h1>
            </Link>
            <div>
                <button className={styles.button}>Make Own Cosmos!</button>
                <Link href={'/login'} className={styles.loginButton}>Login</Link>
            </div>
        </header>
    );
}
