import style from '@/styles/dashboard/components/tag/page.module.scss'
import { FaTag } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";
import { PiFilmReelBold } from "react-icons/pi";

type TagType = 'camera' | 'film' | 'draw_app';

interface TagProps {
    name: string;
    count: number;
    type: TagType;
}

function TagIcon(type: TagType ) {
    switch (type) {
        case 'camera':
            return <FaCamera />;
        case 'film':
            return <PiFilmReelBold />;
        case 'draw_app':
            return <FaTag />;
    }
}
function Tag({ name, count, type }: TagProps) {
    return (
        <div className={style.tagContainer}>
            <span className={style.tagName}>{TagIcon(type)}{name}</span>
            <span className={style.tagCount}>{count}개의 작업물</span>
        </div>
    );
}

export function DashboardTag() {
    return (
        <section className={style.container}>
            <span className={style.title}>작업물 태그</span>
            <div className={style.tagListContainer}>
                <Tag name="풍경" count={32} type='camera' />
                <Tag name="풍경" count={32} type='film' />
                <Tag name="풍경" count={32} type='camera' />
                <Tag name="풍경" count={32} type='draw_app' />
            </div>
        </section>
    );
}