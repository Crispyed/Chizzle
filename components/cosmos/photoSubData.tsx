import styles from "@/styles/cosmos/components/photoSubData.module.scss";
import Image, { StaticImageData } from "next/image";

interface ICosmosPageProfileSNS {
    lastUploadDate: string;
    imageCount: number;
}

export default function CosmosPagePhotoSubData({ lastUploadDate, imageCount }: ICosmosPageProfileSNS) {
    return (
        <div className={styles.container}>
            <span>마지막 포스팅 - {lastUploadDate}</span>
            <span>{imageCount}개의 작업물</span>
        </div>
    )
}