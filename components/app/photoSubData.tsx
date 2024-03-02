import styles from "@/styles/app/components/photoSubData.module.scss";
import Image, { StaticImageData } from "next/image";

interface IPagePhotoSubData {
    lastUploadDate: string;
    imageCount: number;
}

export function PagePhotoSubData({ lastUploadDate, imageCount }: IPagePhotoSubData) {
    return (
        <div className={styles.container}>
            <span>마지막 포스팅 - {lastUploadDate}</span>
            <span>{imageCount}개의 작업물</span>
        </div>
    )
}