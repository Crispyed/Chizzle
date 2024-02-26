import styles from "@/styles/cosmos/page.module.scss";
import CosmosPageTitle from "../../components/cosmos/title";
import CosmosPrimaryImage from "@/components/cosmos/primaryImage";
import CosmosPageProfile from "@/components/cosmos/profile";

export default function UserCosmos({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <CosmosPrimaryImage />
            <CosmosPageProfile />
        </main>
    );
}
