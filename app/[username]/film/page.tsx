import { redirect } from "next/navigation";

export default function HeaderFilmRoot({ params }: { params: { username: string } }) {
    redirect(`/${params.username}`)
}
