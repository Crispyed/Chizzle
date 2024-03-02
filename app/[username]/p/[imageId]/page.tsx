'use client'

import { Header } from "@/components/app/header";
import styles from "@/styles/app/detail/page.module.scss";
import Image from "next/image";
import dummy from '@/public/image/dummy/photo_3.jpg';
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

import { FaCamera } from "react-icons/fa6";
import { PiFilmReelBold } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import { RiCameraLensFill } from "react-icons/ri";
import { MdOutlineLensBlur } from "react-icons/md";
import { MdPhotoSizeSelectLarge } from "react-icons/md";

interface CameraDetailProps {
    username: string;
    camera: string;
    film: string;
}

function CameraDetail({ username, camera, film }: CameraDetailProps) {
    return (
        <div className={styles.cameraDetailWrap}>
            <div>
                <FaCamera />
                <Link href={`/${username}/camera/${camera}`} className={`${styles.imageDetail} ${styles.cameraName}`}>{camera}</Link>
            </div>
            <div>
                <PiFilmReelBold />
                <Link href={`/${username}/film/${film}`} className={`${styles.imageDetail} ${styles.cameraFilm}`}>{film}</Link>
            </div>
            <div style={{ height: '10px'}}/>
            <div>
                <MdPhotoSizeSelectLarge />
                <span className={styles.imageDetail}>35mm <strong>53mm</strong></span>
            </div>
            <div>
                <RiCameraLensFill />
                <span className={styles.imageDetail}>ƒ/1.4</span>
            </div>
            <div>
                <FaRunning />
                <span className={styles.imageDetail}>1/250s</span>
            </div>
            <div>
                <MdOutlineLensBlur />
                <span className={styles.imageDetail}>ISO 120</span>
            </div>
        </div>
    )
}

export default function ImageDetail({ params }: { params: { username: string } }) {
    const camera = 'Canon EOS 600D';
    const film = 'Kodak Portra 400';
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
            <Header slug={params.username} />
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
                    <div style={{ height: '10px'}}/>
                    <span className={styles.imageDetail}>2982x1829</span>
                    <div style={{ height: '10px'}}/>
                    <CameraDetail username={params.username} camera={camera} film={film} />
                    <div style={{ height: '10px'}}/>
                    <span className={styles.imageDetail}>2024/03/23 18:32PM</span>
                    <div style={{ height: '10px'}}/>
                    <span className={styles.imageDetail}>1,920 Views</span>
                </div>
            </section>
            <div className="redirectAnimationContainer" style={{ height: '100vh', top: 'auto', bottom: 0 }} />
        </main>
    );
}
