'use client'

import styles from "@/styles/app/components/tab/tab.module.scss";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { RecoilProfileTab } from "@/states/profileTab";

export function ProfileTab() {
    const [tab, setTab] = useRecoilState(RecoilProfileTab)
    return (
        <div className={styles.tabContainer}>
            <div className={styles.tabItem} data-selected={tab === 'photo'} onClick={() => {
                setTab('photo')
            }}>
                <MdOutlinePhotoSizeSelectActual />
                <span>사진</span>
            </div>
            <div className={styles.tabItem} data-selected={tab === 'tag'} onClick={() => {
                setTab('tag')
            }}>
                <FaTag />
                <span>태그</span>
            </div>
        </div>
    );
}