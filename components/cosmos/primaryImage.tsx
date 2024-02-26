'use client'

import styles from "@/styles/cosmos/components/primaryImage.module.scss";
import DummyImg from '@/public/image/dummy/primaryPhoto.jpg'; //TODO: Delete DummyImg
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CosmosPrimaryImage() {
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        gsap.to(imageRef.current, {
            clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0 100%)',
            duration: 1.7,
            delay: .10,
            ease: "expoScale(0.5,7,none)"
        })
    });

    return (
        <div className={styles.container}>
            <Image
                src={DummyImg}
                alt="Photo Name" //TODO: Edit Static Photo Name
                ref={imageRef}
                className={styles.image}
            />
            <div className={styles.bottom}>

            </div>
        </div>
    );
}
