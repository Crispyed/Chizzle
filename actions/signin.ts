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
        username: formData.get('username') as string,
        passwordConfirm: formData.get('passwordConfirm') as string,
    }

    const errors = []

    if(!emailRegex.test(data.email)) errors.push('Email')
    if(data.password.length < 8) errors.push('Password')
    if(data.password.length < 8) errors.push('Password')
    if(data.password !== data.passwordConfirm) errors.push('PasswordConfirm');

    // if error not null return error
    if(errors.length > 0) return {
        message: errors
    }

    const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                username: data.username,
                profile_img_url: '',
            }
        }
    });

    if (error) {
        return {
            message: 'Internal server error',
        }
    } else {
        revalidatePath('/', 'layout')
        redirect('/')
    }
}