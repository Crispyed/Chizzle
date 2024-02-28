import styles from "@/styles/logo.module.scss";
import Logo from "@/public/logo.svg";
import Image from "next/image";

export default function CosmosLogo() {
    return (
        <div className={styles.container}>
            <Image src={Logo} alt="logo" className={styles.logoSVG} />
            <span className={styles.logoName}>Cosmos</span>
        </div>
    );
}
