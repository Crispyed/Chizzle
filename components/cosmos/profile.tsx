import styles from "@/styles/cosmos/components/profile.module.scss";
import Image from "next/image";
import DummyProfile from '@/public/image/dummy/profile.jpg';
import Youtube from '@/public/svg/youtube.svg';
import Instagram from '@/public/svg/instagram.svg';
import CosmosPageProfileSNS from "./sns";
import DummyImg from '@/public/image/dummy/primaryPhoto.jpg';
import CosmosProfileTabProps from "./tab/tab";

export default function CosmosPageProfile() {
    return (
        <section className={styles.container}>
            <Image
                src={DummyImg}
                alt="Photo Name" //TODO: Edit Static Photo Name
                className={styles.bannerImage}
            />
            <div className={styles.dataContainer}>
                <Image
                    src={DummyProfile}
                    alt="profile" //TODO: Edit Static Profile Name
                    className={styles.profileImage}
                />
                <h1 className={styles.displayName}>정태욱</h1>
                <span className={styles.description}>Hello, my name is Taeuk, and I am a photographer who takes pictures of the world.</span>
                <div className={styles.snsContainer}>
                    <CosmosPageProfileSNS
                        icon={Youtube}
                        snsName="Youtube"
                        url="https://www.youtube.com/@dkwl025"
                        accountName="양아지"
                    />
                    <CosmosPageProfileSNS
                        icon={Instagram}
                        snsName="Instagram"
                        url="https://www.instagram.com/taeuk.photo/"
                        accountName="정태욱"
                    />
                </div>
                <div className={styles.visitorContainer}>
                    <span className={styles.visitor} style={{ marginRight: '20px' }}><strong>오늘 방문자</strong>1,252</span>
                    <span className={styles.visitor}><strong>총 방문자</strong>1,920,827</span>
                </div>
                <CosmosProfileTabProps />
            </div>
        </section>
    );
}