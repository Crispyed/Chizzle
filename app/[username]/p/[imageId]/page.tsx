'use client'

import CosmosPageTitle from "@/components/cosmos/header";
import styles from "@/styles/cosmos/detail/page.module.scss";
import Image from "next/image";
import dummy from '@/public/image/dummy/photo_1.jpg';
import CosmosPageProfile from "@/components/cosmos/profile";
import { useEffect } from "react";
import gsap from "gsap";

function CameraDetail() {
    return (
        <div className={styles.cameraDetailWrap}>
            <span className={styles.imageDetail}>35mm <strong>53mm</strong></span>
            <span className={styles.imageDetail}>ƒ/1.4</span>
            <span className={styles.imageDetail}>1/250s</span>
            <span className={styles.imageDetail}>ISO 120</span>
        </div>
    )
}

export default function CosmosDetailImage({ params }: { params: { username: string } }) {
    useEffect(() => {
        gsap.to('.redirectAnimationContainer', {
            height: '0vh',
            duration: 1,
            delay: .10,
            ease: "power2.out",
        })
    }, [])
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <section className={styles.wrap}>
                <div className={styles.imageContainer}>
                    <Image
                        src={dummy}
                        alt="image name"
                        className={styles.image}
                    />
                </div>
                <div className={styles.imageDetailContainer}>
                    <div className={styles.imageTypeContainer}>PHOTO</div>
                    <h1 className={styles.imageName}>이미지 이름</h1>
                    <div style={{ height: '20px'}}/>
                    <span  className={styles.imageDetail}>2982x1829</span>
                    <div style={{ height: '10px'}}/>
                    <CameraDetail />
                    <div style={{ height: '15px'}}/>
                    <span  className={styles.imageDetail}>2024/03/23 18:32PM</span>
                    <div style={{ height: '30px'}}/>
                    <span  className={styles.imageDetail}>1,920 Views</span>
                </div>
            </section>
            <CosmosPageProfile />
            <div className="redirectAnimationContainer" style={{ height: '100vh', top: 'auto', bottom: 0 }}/>
        </main>
    );
}
