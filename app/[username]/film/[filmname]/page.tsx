import { Header } from "@/components/app/header";
import { PageImageList } from "@/components/app/imageList";
import styles from "@/styles/app/film/page.module.scss";
import { PiFilmReelBold } from "react-icons/pi";

export default function ProfileFilterFilm({ params }: { params: { username: string, filmname: string } }) {
    return (
        <main className={styles.container}>
            <Header slug={params.username} />
            <div className={styles.top}>
                <h1 className={styles.title}><PiFilmReelBold /> {params.filmname.replaceAll('%20', ' ')}</h1>
                <span className={styles.photoCount}>32 Photos</span>
            </div>
            <PageImageList slug={params.username} />
        </main>
    );
}
