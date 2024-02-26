import styles from "@/styles/cosmos/components/image.module.scss";
import DummyImg from '@/public/image/dummy/primaryPhoto.jpg'; //TODO: Delete DummyImg
import Image from "next/image";

export default function CosmosPrimaryImage() {
    return (
        <div className={styles.container}>
            <Image
                src={DummyImg}
                alt="Photo Name" //TODO: Edit Static Photo Name
                className={styles.image}
            />
        </div>
    );
}
