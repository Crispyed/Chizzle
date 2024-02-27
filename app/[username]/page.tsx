import styles from "@/styles/cosmos/page.module.scss";
import CosmosPageTitle from "../../components/cosmos/header";
import CosmosPrimaryImage from "@/components/cosmos/primaryImage";
import CosmosPageProfile from "@/components/cosmos/profile";
import CosmosPageImageList from "@/components/cosmos/imageList";

export default function UserCosmos({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <CosmosPrimaryImage />
            <CosmosPageProfile />
            <CosmosPageImageList slug={params.username} />
        </main>
    );
}
