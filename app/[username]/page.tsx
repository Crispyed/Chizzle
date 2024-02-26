import styles from "@/styles/cosmos/page.module.scss";
import CosmosPageTitle from "../../components/cosmos/pageTitle";
import CosmosPrimaryImage from "@/components/cosmos/primaryImage";

export default function UserCosmos({ params }: { params: { username: string } }) {
    return (
        <main className={styles.container}>
            <CosmosPageTitle slug={params.username} />
            <CosmosPrimaryImage />
        </main>
    );
}
