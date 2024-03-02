import style from '@/styles/dashboard/components/post/postList.module.scss'
import Dummy from '@/public/image/dummy/photo_1.jpg'
import Image from 'next/image';
import DashboardPostListDetail from './postListDetail';
import { FaTag } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

interface PostListProps {
    title: string;
}

function List({ title }: PostListProps) {
    return (
        <div className={style.listContainer}>
            <div className={style.left}>
                <Image
                    src={Dummy}
                    alt={title}
                    className={style.listImage}
                />
                <div className={style.listData}>
                    <div className={style.top}>
                        <span className={style.listTitle}>{title}</span>
                        <span className={style.postType}>포토</span>
                    </div>
                    <div style={{ marginBottom: '5px', display: 'flex' }}>
                        <DashboardPostListDetail icon={<FaTag />} value='교회친구들' showUnderlineWhileHover isTag />
                        <DashboardPostListDetail icon={<FaRegCalendar />} value='2024년 3월 24일' />
                        <DashboardPostListDetail icon={<IoMdEye />} value='1,239회' />
                    </div>
                </div>
            </div>
            <div className={style.menu}>
                <BsThreeDotsVertical />
            </div>
        </div>
    );
}

export function DashboardPostList() {
    return (
        <section>
            <List
                title='20240827 신희'
            />
            <List
                title='20240827 신희'
            />
            <List
                title='20240827 신희'
            />
        </section>
    );
}