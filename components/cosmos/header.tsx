"use client"

import styles from "@/styles/cosmos/components/header.module.scss";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CosmosPageHeader({ slug }: { slug: string }) {
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
            <Link href={`/${slug}`} className={styles.titleContainer}>
                <h1 className={styles.title} ref={titleTopRef}><strong>{slug}</strong>'s</h1>
                <h1 className={styles.title} ref={titleBottomRef}>Cosmos</h1>
            </Link>
            <div>
                <button className={styles.button}>Make Own Cosmos!</button>
                <Link href={'/login'} className={styles.loginButton}>Login</Link>
            </div>
        </header>
    );
}
