import styles from "@/styles/logo.module.scss";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export function ServiceLogo() {
    return (
        <div className={styles.container}>
            <Image src={Logo} alt="logo" className={styles.logoSVG} />
            <span className={styles.logoName}>Chizzle</span>
        </div>
    );
}
