'use client'

import { Header } from "@/components/app/header";
import { PageImageList } from "@/components/app/imageList";
import styles from "@/styles/app/film/page.module.scss";
import { MdCamera } from "react-icons/md";

export default function ProfileFilterCamera({ params }: { params: { username: string, cameraname: string } }) {
    return (
        <main className={styles.container}>
            <Header slug={params.username} />
            <div className={styles.top}>
                <h1 className={styles.title}><MdCamera /> {params.cameraname.replaceAll('%20', ' ')}</h1>
                <span className={styles.photoCount}>32 Photos</span>
            </div>
            <PageImageList slug={params.username} />
        </main>
    );
}
