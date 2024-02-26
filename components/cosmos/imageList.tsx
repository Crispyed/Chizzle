'use client'

import styles from "@/styles/cosmos/components/image.module.scss";
import Image, { StaticImageData } from "next/image";
import dummy_1 from '@/public/image/dummy/photo_1.jpg';
import dummy_2 from '@/public/image/dummy/photo_2.jpg';
import dummy_3 from '@/public/image/dummy/photo_3.jpg';
import dummy_4 from '@/public/image/dummy/photo_4.jpg';
import dummy_5 from '@/public/image/dummy/photo_5.jpg';
import dummy_6 from '@/public/image/dummy/photo_6.jpg';
import dummy_7 from '@/public/image/dummy/photo_7.jpg';
import dummy_8 from '@/public/image/dummy/photo_8.jpg';
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface ImageComponentProps {
    src: string | StaticImageData;
    title: string;
    slug: string;
    id: string;
}

function ImageComponent({ src, title, slug, id }: ImageComponentProps) {
    const router = useRouter();
    function ClickHandle() {
        gsap.to('.redirectAnimationContainer', {
            height: '100vh',
            duration: 1.1,
            delay: .10,
            ease: "power2.out",
        }).then(() => {
            router.push(`${slug}/${id}`)
        })
    }

    return (
        <Image
            src={src}
            alt={title}
            className={`${styles.image}`}
            onClick={() => ClickHandle()}
        />
    )
}

export default function CosmosPageImageList({ slug }: { slug: string }) {
    return (
        <section className={styles.container}>
            <ImageComponent
                src={dummy_1}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_2}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_3}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_4}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_5}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_6}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_7}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <ImageComponent
                src={dummy_8}
                title={"image name"} // TODO:Edit Photo name
                slug={slug}
                id="6CHeuCJ9I"
            />
            <div className="redirectAnimationContainer"/>
        </section>
    );
}
