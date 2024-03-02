import { redirect } from "next/navigation";

export default function PageFilmRoot({ params }: { params: { username: string } }) {
    redirect(`/${params.username}`)
}
