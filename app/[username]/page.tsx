import styles from "@/styles/app/page.module.scss";
import { Header } from "@/components/app/header";
import { PageProfile } from "@/components/app/profile";
import { PageImageList } from "@/components/app/imageList";
import { ProfileTabContainer } from "@/components/app/tab/container";
import { PagePhotoSubData } from "@/components/app/photoSubData";

export default function UserProfile({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <Header slug={params.username} />
            <PageProfile />
            <ProfileTabContainer stateName="photo">
                <PagePhotoSubData imageCount={32} lastUploadDate="2023 / 03 / 29" />
                <PageImageList slug={params.username} />
            </ProfileTabContainer>
        </main>
    );
}
