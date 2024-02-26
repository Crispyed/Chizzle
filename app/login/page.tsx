import Image from "next/image";
import styles from '@/styles/login/page.module.scss';

export default function Login() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Login to Cosmos</h1>
            <form className={styles.form}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="name@example.com" className={styles.input}/>
                <label className={styles.label}>Password</label>
                <input type="password" placeholder="Password" className={styles.input}/>
                <button type="submit" className={styles.button}>LOG IN</button>
            </form>
        </main>
    );
}
