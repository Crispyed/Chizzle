import styles from "@/styles/cosmos/components/sns.module.scss";
import Image, { StaticImageData } from "next/image";

interface ICosmosPageProfileSNS {
    icon: string | StaticImageData;
    snsName: string;
    url: string;
    accountName: string;
}

export default function CosmosPageProfileSNS({ icon, snsName, url, accountName }: ICosmosPageProfileSNS) {
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