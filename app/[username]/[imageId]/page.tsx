import CosmosPageTitle from "@/components/cosmos/title";
import styles from "@/styles/cosmos/detail/page.module.scss";
import Image from "next/image";
import dummy from '@/public/image/dummy/photo_4.jpg';

export default function CosmosDetailImage({ params }: { params: { username: string } }) {
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
                <div>
                    <div className={styles.imageTypeContainer}>PHOTO</div>
                    <h1 className={styles.imageName}>Gyeongbokgung Palace</h1>
                </div>
            </section>
        </main>
    );
}
