"use client"

import styles from "@/styles/cosmos/components/title.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function CosmosPageTitle({ slug }: { slug: string }) {
    const titleTopRef = useRef<HTMLHeadingElement>(null);
    const titleBottomRef = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        gsap.registerPlugin()
        gsap.fromTo(titleTopRef.current, { y: 30, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: .5,
            delay: .10,
        })
        gsap.fromTo(titleBottomRef.current, { y: 30, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: .7,
            delay: .30,
        })
    }, [])
    return (
        <header className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title} ref={titleTopRef}><strong>{slug}</strong>'s</h1>
                <h1 className={styles.title} ref={titleBottomRef}>Cosmos</h1>
            </div>
            <div>
                <button className={styles.button}>Make Own Cosmos!</button>
                <button className={styles.loginButton}>Login</button>
            </div>
        </header>
    );
}
