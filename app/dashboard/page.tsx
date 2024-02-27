import DashboardHeader from "@/components/dashboard/header";
import Image from "next/image";

export default function Home({ params }: { params: { username: string } }) {
    return (
        <main>
            <DashboardHeader slug={params.username} />
        </main>
    );
}