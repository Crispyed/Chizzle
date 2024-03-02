import { PagePhotoSubData } from "@/components/app/photoSubData";
import { DashboardPostList } from "@/components/dashboard/Post/postList";
import { DashboardAnalyticsSummary } from "@/components/dashboard/analyticsSummary";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSettingUserData } from "@/components/dashboard/setting/userData";
import { DashboardTabContainer } from "@/components/dashboard/tab/container";
import { DashboardTab } from "@/components/dashboard/tab/tab";
import { DashboardTag } from "@/components/dashboard/tag/tag";

export default function Home() {
    return (
        <main>
            <DashboardHeader />
            <DashboardTab />
            <DashboardTabContainer stateName="home">
                <DashboardAnalyticsSummary />
            </DashboardTabContainer>
            <DashboardTabContainer stateName="post">
                <PagePhotoSubData imageCount={32} lastUploadDate="2023 / 03 / 29" />
                <DashboardPostList />
            </DashboardTabContainer>
            <DashboardTabContainer stateName="tag" isSmall>
                <DashboardTag />
            </DashboardTabContainer>
            <DashboardTabContainer stateName="setting" isSmall>
                <DashboardSettingUserData />
            </DashboardTabContainer>
        </main>
    );
}