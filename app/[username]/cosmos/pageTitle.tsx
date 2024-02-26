import styles from "@/styles/cosmos/components/title.module.scss";

export default function CosmosPageTitle({ slug }: { slug: string }) {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}><strong>{slug}</strong>'s</h1>
            <h1 className={styles.title}>Cosmos</h1>
        </main>
    );
}
