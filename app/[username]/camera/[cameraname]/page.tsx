'use client'

import CosmosPageTitle from "@/components/cosmos/header";
import CosmosPageImageList from "@/components/cosmos/imageList";
import styles from "@/styles/cosmos/film/page.module.scss";
import { MdCamera } from "react-icons/md";

export default function CosmosFilm({ params }: { params: { username: string, cameraname: string } }) {
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <div className={styles.top}>
                <h1 className={styles.title}><MdCamera /> {params.cameraname.replaceAll('%20', ' ')}</h1>
                <span className={styles.photoCount}>32 Photos</span>
            </div>
            <CosmosPageImageList slug={params.username} />
        </main>
    );
}
