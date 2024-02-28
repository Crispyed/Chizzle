'use client'

import styles from "@/styles/dashboard/components/tab/container.module.scss";
import { useRecoilState } from "recoil";
import { DashboardTabState } from "@/states/dashboardTab";

interface DashboardTabContainerProps {
    stateName: string;
    children?: React.ReactNode;
}

export default function DashboardTabContainer({ stateName, children }: DashboardTabContainerProps) {
    const [tab, setTab] = useRecoilState(DashboardTabState)
    return (
        <div className={styles.container} data-visible={stateName === tab}>
            {children}
        </div>
    );
}