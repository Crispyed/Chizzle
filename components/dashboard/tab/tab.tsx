'use client'

import styles from "@/styles/cosmos/components/tab/tab.module.scss";
import { useRecoilState } from "recoil";
import { DashboardTabState } from "@/states/dashboardTab";
import { GoHomeFill } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdSettings } from "react-icons/io";
import { FaTag } from "react-icons/fa";

export default function DashboardTab() {
    const [tab, setTab] = useRecoilState(DashboardTabState)
    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabItem} data-selected={tab === 'home'} onClick={() => {
                setTab('home')
            }}>
                <GoHomeFill />
                <span>홈</span>
            </div>
            <div className={styles.tabItem} data-selected={tab === 'photo'} onClick={() => {
                setTab('photo')
            }}>
                <LuLayoutDashboard />
                <span>게시물 관리</span>
            </div>
            <div className={styles.tabItem} data-selected={tab === 'tag'} onClick={() => {
                setTab('tag')
            }}>
                <FaTag />
                <span>태그 관리</span>
            </div>
            <div className={styles.tabItem} data-selected={tab === 'setting'} onClick={() => {
                setTab('setting')
            }}>
                <IoMdSettings />
                <span>설정</span>
            </div>
        </div>
    );
}