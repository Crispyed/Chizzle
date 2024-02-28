import { redirect } from "next/navigation";

export default function CosmosDetailImageRoot({ params }: { params: { username: string } }) {
    redirect(`/${params.username}`);
}
