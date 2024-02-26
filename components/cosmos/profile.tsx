import styles from "@/styles/cosmos/components/profile.module.scss";
import Image from "next/image";
import DummyProfile from '@/public/image/dummy/profile.jpg';
import Youtube from '@/public/svg/youtube.svg';
import Instagram from '@/public/svg/instagram.svg';
import CosmosPageProfileSNS from "./sns";

export default function CosmosPageProfile() {
    return (
        <section className={styles.container}>
            <div className={styles.article}>
                <span className={styles.title}>ABOUT ME</span>
                <h3 className={styles.description}>Hello, my name is Taeuk, and I am a photographer who takes pictures of the world.</h3>
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
            </div>
            <Image
                src={DummyProfile}
                alt="profile" //TODO: Edit Static Profile Name
                className={styles.profileImage}
            />
        </section>
    );
}
