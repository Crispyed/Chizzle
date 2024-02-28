'use client'

import styles from "@/styles/cosmos/components/tab/container.module.scss";
import { useRecoilState } from "recoil";
import { cosmosProfileTab } from "@/states/cosmosProfile";

interface CosmosProfileTabContainerProps {
    stateName: string;
    children?: React.ReactNode;
}

export default function CosmosProfileTabContainer({ stateName, children }: CosmosProfileTabContainerProps) {
    const [tab, setTab] = useRecoilState(cosmosProfileTab)
    return (
        <div className={styles.container} data-visible={stateName === tab}>
            {children}
        </div>
    );
}