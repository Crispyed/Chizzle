'use client'

import styles from "@/styles/app/components/tab/container.module.scss";
import { useRecoilState } from "recoil";
import { RecoilProfileTab } from "@/states/profileTab";

interface ProfileTabContainerProps {
    stateName: string;
    children?: React.ReactNode;
}

export function ProfileTabContainer({ stateName, children }: ProfileTabContainerProps) {
    const [tab, setTab] = useRecoilState(RecoilProfileTab)
    return (
        <div className={styles.container} data-visible={stateName === tab}>
            {children}
        </div>
    );
}