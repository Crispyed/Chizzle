import styles from "@/styles/cosmos/components/image.module.scss";
import Image from "next/image";
import dummy_1 from '@/public/image/dummy/photo_1.jpg';
import dummy_2 from '@/public/image/dummy/photo_2.jpg';
import dummy_3 from '@/public/image/dummy/photo_3.jpg';
import dummy_4 from '@/public/image/dummy/photo_4.jpg';
import dummy_5 from '@/public/image/dummy/photo_5.jpg';
import dummy_6 from '@/public/image/dummy/photo_6.jpg';
import dummy_7 from '@/public/image/dummy/photo_7.jpg';
import dummy_8 from '@/public/image/dummy/photo_8.jpg';

function ImageComponent() {
    return (
        <Image
            src={dummy_1}
            alt={"image name"} // TODO:Edit Photo name
            className={styles.image}
        />
    )
}

export default function CosmosPageImageList() {
    return (
        <section className={styles.container}>
            <Image
                src={dummy_1}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_2}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_3}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_4}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_5}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_6}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_7}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_8}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
             <Image
                src={dummy_1}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_2}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_3}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_4}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_5}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_6}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_7}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_8}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_3}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_4}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_5}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
            <Image
                src={dummy_6}
                alt={"image name"} // TODO:Edit Photo name
                className={styles.image}
            />
        </section>
    );
}
