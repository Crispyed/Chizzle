import styles from "@/styles/app/components/sns.module.scss";
import Image, { StaticImageData } from "next/image";

interface IPageProfileSNS {
    icon: string | StaticImageData;
    snsName: string;
    url: string;
    accountName: string;
}

export function PageProfileSNS({ icon, snsName, url, accountName }: IPageProfileSNS) {
    return (
        <a className={styles.container} href={url} target="_blank">
            <Image
                src={icon}
                alt={`${accountName} - ${snsName}`}
                width={25}
            />
            <main className={styles.dataContainer}>
                <span className={styles.snsName}>{snsName}</span>
                <span className={styles.accountName}>{accountName}</span>
            </main>
        </a>
    )
}