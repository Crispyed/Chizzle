import { redirect } from "next/navigation";

export default function CosmosFilmRoot({ params }: { params: { username: string } }) {
    redirect(`/${params.username}`)
}
