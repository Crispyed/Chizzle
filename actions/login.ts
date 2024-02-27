'use server'

import { emailRegex } from "@/lib/regex";
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type FormState = {
    message: string,
}

export async function loginAction(prevState: FormState, formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    if(!emailRegex.test(data.email)) return {
        message: 'Email is incorrectly formatted'
    }

    if(data.password.length < 8) return {
        message: 'Email is incorrectly formatted'
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return {
            message: 'Invalid login credentials',
        }
    } else {
        revalidatePath('/', 'layout')
        redirect('/')
    }
}