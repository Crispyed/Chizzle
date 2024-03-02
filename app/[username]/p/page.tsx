import { redirect } from "next/navigation";

export default function PageDetailImageRoot({ params }: { params: { username: string } }) {
    redirect(`/${params.username}`);
}
