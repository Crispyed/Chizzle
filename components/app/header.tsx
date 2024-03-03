import styles from "@/styles/app/components/header.module.scss";
import Link from "next/link";
import { ServiceLogo } from "../logo";

export function Header({ slug }: { slug: string }) {
    return (
        <header className={styles.container}>
            <Link href={`/${slug}`} className={styles.titleContainer}>
                <ServiceLogo/>
            </Link>
            <div>
                <button className={styles.button}>나만의 Chizzle 만들기</button>
                <Link href={'/login'} className={styles.loginButton}>로그인</Link>
            </div>
        </header>
    );
}