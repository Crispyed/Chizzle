'use client'

import style from '@/styles/dashboard/components/post/postList.module.scss'
import { DashboardTabState } from '@/states/dashboardTab';
import { useRecoilState } from 'recoil';

interface PostListDetail {
    icon: React.ReactNode;
    value: string;
    isTag?: boolean;
    showUnderlineWhileHover?: boolean;
}

export function DashboardPostListDetail({ icon, value, showUnderlineWhileHover, isTag }: PostListDetail) {
    const [tab, setTab] = useRecoilState(DashboardTabState)
    return (
        <div className={style.listDetailContainer} data-underline={showUnderlineWhileHover} onClick={() => {
            if (isTag) setTab('tag')
        }}>
            {icon}
            <span>{value}</span>
        </div>
    );
}