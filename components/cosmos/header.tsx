import styles from "@/styles/cosmos/components/header.module.scss";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function CosmosPageHeader({ slug }: { slug: string }) {
    return (
        <header className={styles.container}>
            <Link href={`/${slug}`} className={styles.titleContainer}>
                <Image src={Logo} alt="logo" className={styles.logoSVG} />
                <span>Cosmos</span>
            </Link>
            <div>
                <button className={styles.button}>나만의 코스모스 만들기</button>
                <Link href={'/login'} className={styles.loginButton}>로그인</Link>
            </div>
        </header>
    );
}
