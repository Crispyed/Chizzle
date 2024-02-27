'use client'

import Image from "next/image";
import styles from '@/styles/auth/page.module.scss';
import { useEffect, useState } from "react";
import { LoginState } from "@/types/auth";
import { emailRegex } from "@/lib/regex";
import { createClient } from "@/lib/supabase/client"
import { redirect } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { Toast } from "@/lib/toast";
import { loginAction } from "@/actions/login";

export default function Login() {
    const [data, setData] = useState<LoginState>({
        email: "",
        password: ""
    });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(!emailRegex.test(data.email)) return setDisabled(true)
        if(data.password.length < 8) return setDisabled(true)
        setDisabled(false)
    }, [data]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('눌러짐')

        const supabase = createClient();
        const { error } = await supabase.auth.signInWithPassword(data);

        if (error) {
            if(error.message === 'Invalid login credentials') Toast({ type: 'error', text: 'Invalid login credentials' })
        } else {
            redirect('/')
        }
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Login to Cosmos</h1>
            <form className={styles.form} action={loginAction}>
                <label className={styles.label}>Email</label>
                <input type="email" placeholder="name@example.com" className={styles.input} onChange={(e) => {
                    setData({ ...data, email: e.target.value })
                }}/>
                <label className={styles.label}>Password</label>
                <input type="password" placeholder="Password" className={styles.input} onChange={(e) => {
                    setData({ ...data, password: e.target.value })
                }}/>
                {/* <label className={styles.label}>8 characters or more<br/>Contains special characters</label> */}
                <button type="submit" disabled={disabled} className={styles.button}>LOG IN</button>
                <a href={"/register"} className={styles.href}>Already have an account?</a>
            </form>
            <ToastContainer />
        </main>
    );
}
