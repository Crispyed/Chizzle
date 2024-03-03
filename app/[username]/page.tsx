import styles from "@/styles/app/page.module.scss";
import { PageProfile } from "@/components/app/profile";
import { PageImageList } from "@/components/app/imageList";
import { ProfileTabContainer } from "@/components/app/tab/container";
import { PagePhotoSubData } from "@/components/app/photoSubData";
import { ServiceLogo } from "@/components/logo";
import Link from "next/link";
import { ProfileTab } from "@/components/app/tab/tab";

export function ProfileHeader({ slug }: { slug: string }) {
    return (
        <header className={styles.profileHeader}>
            <Link href={`/${slug}`} className={styles.titleContainer}>
                <ServiceLogo/>
            </Link>
            <div>
                <Link href={'/login'} className={styles.button}>나만의 Chizzle 만들기</Link>
            </div>
        </header>
    );
}

export default function UserProfile({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <ProfileHeader slug={params.username} />
            <PageProfile />
            <ProfileTab />
            <ProfileTabContainer stateName="photo">
                <PagePhotoSubData imageCount={32} lastUploadDate="2023 / 03 / 29" />
                <PageImageList slug={params.username} />
            </ProfileTabContainer>
        </main>
    );
}
