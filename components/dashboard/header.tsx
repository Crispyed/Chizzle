import styles from "@/styles/dashboard/components/header.module.scss";
import Link from "next/link";
import CosmoseLogo from "../logo";
import { IoMdAdd } from "react-icons/io";

export function DashboardHeader() {
    return (
        <header className={styles.container}>
            <Link href={`/`} className={styles.titleContainer}>
                <CosmoseLogo/>
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button className={styles.button}><IoMdAdd /> 새로운 게시물 만들기</button>
            </div>
        </header>
    );
}
