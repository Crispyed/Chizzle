import style from '@/styles/dashboard/components/tag/page.module.scss'
import { FaTag } from "react-icons/fa6";

interface TagProps {
    name: string;
    count: number;
}

function Tag({ name, count }: TagProps) {
    return (
        <div className={style.tagContainer}>
            <span className={style.tagName}><FaTag /> {name}</span>
            <span className={style.tagCount}>{count}개의 작업물</span>
        </div>
    );

}

export default function DashboardTag() {
    return (
        <section className={style.container}>
            <span className={style.title}>작업물 태그</span>
            <div className={style.tagListContainer}>
                <Tag name="풍경" count={32} />
                <Tag name="풍경" count={32} />
                <Tag name="풍경" count={32} />
                <Tag name="풍경" count={32} />
            </div>
        </section>
    );
}