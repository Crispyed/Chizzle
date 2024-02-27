'use server'

import { createClient } from "@/lib/supabase/server"
import { Toast } from "@/lib/toast";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
    const supabase = createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        Toast({ type: 'error', text: 'Invalid login credentials' })
    }
    
      revalidatePath('/', 'layout')
      redirect('/')
}