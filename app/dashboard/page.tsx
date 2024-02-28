import CosmosPagePhotoSubData from "@/components/cosmos/photoSubData";
import DashboardPostList from "@/components/dashboard/Post/postList";
import DashboardAnalyticsSummary from "@/components/dashboard/analyticsSummary";
import DashboardHeader from "@/components/dashboard/header";
import DashboardTabContainer from "@/components/dashboard/tab/container";
import DashboardTab from "@/components/dashboard/tab/tab";

export default function Home() {
    return (
        <main>
            <DashboardHeader />
            <DashboardTab />
            <DashboardTabContainer stateName="home">
                <DashboardAnalyticsSummary />
            </DashboardTabContainer>
            <DashboardTabContainer stateName="post">
                <CosmosPagePhotoSubData imageCount={32} lastUploadDate="2023 / 03 / 29" />
                <DashboardPostList />
            </DashboardTabContainer>
        </main>
    );
}