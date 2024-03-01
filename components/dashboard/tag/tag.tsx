'use client'

import style from '@/styles/dashboard/components/tag/page.module.scss'

function TagItem() {}

export default function DashboardTag() {
    return (
        <section className={style.container}>
            <span className={style.title}>작업물 태그</span>
        </section>
    );
}