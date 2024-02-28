import styles from "@/styles/cosmos/page.module.scss";
import CosmosPageTitle from "../../components/cosmos/header";
import CosmosPageProfile from "@/components/cosmos/profile";
import CosmosPageImageList from "@/components/cosmos/imageList";
import CosmosProfileTabContainer from "@/components/cosmos/tab/container";
import CosmosPagePhotoSubData from "@/components/cosmos/photoSubData";

export default function UserCosmos({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <CosmosPageProfile />
            <CosmosProfileTabContainer stateName="photo">
                <CosmosPagePhotoSubData imageCount={32} lastUploadDate="2023 / 03 / 29" />
                <CosmosPageImageList slug={params.username} />
            </CosmosProfileTabContainer>
        </main>
    );
}
