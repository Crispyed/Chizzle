'use client'

import styles from "@/styles/dashboard/components/tab/container.module.scss";
import { useRecoilState } from "recoil";
import { DashboardTabState } from "@/states/dashboardTab";

interface DashboardTabContainerProps {
    stateName: string;
    children?: React.ReactNode;
    isSmall?: boolean;
}

export default function DashboardTabContainer({ stateName, children, isSmall }: DashboardTabContainerProps) {
    const [tab] = useRecoilState(DashboardTabState)
    return (
        <div className={styles.container} data-visible={stateName === tab} data-setting={isSmall}>
            {children}
        </div>
    );
}