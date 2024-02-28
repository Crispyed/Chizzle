import React from "react";
import styles from "@/styles/dashboard/components/analyticsSummary.module.scss";
import { FaUser } from "react-icons/fa";
interface CardProps {
    title: string;
    value: string;
    prefix?: string;
}

function Card({ title, value, prefix }: CardProps) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardTop}>
                <span className={styles.title}>{title}</span>
            </div>
            <span className={styles.value}>{value}<b>{prefix}</b></span>
        </div>
    );
}

export default function DashboardAnalyticsSummary() {
    return (
        <section className={styles.container}>
            <Card
                title="오늘 방문자 수"
                value="0"
                prefix="명"
            />
        </section>
    );
}