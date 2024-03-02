'use client'

import Image from "next/image";
import styles from '@/styles/auth/page.module.scss';
import { ToastContainer } from "react-toastify";
import { Toast } from "@/lib/toast";
import { loginAction } from "@/actions/login";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Logo from '@/public/logo.svg';

const initialState = {
    message: '',
}

export default function Login() {
    const [state, formAction] = useFormState(loginAction, initialState)
    
    useEffect(() => {
        switch(state.message) {
            case 'Email is incorrectly formatted':
                Toast('error', '유효하지 않은 이메일 또는 비밀번호입니다')
                break;
            case 'Invalid login credentials':
                Toast('error', '유효하지 않은 이메일 또는 비밀번호입니다')
                break;
        }
    }, [state])

    return (
        <main className={styles.container}>
            <Image src={Logo} alt="Cosmose" width={40} />
            <h1 className={styles.title}>Cosmose 로그인</h1>
            <form className={styles.form} action={formAction}>
                <label className={styles.label}>이메일</label>
                <input type="email" placeholder="name@example.com" className={styles.input} />
                <label className={styles.label}>비밀번호</label>
                <input type="password" placeholder="비밀번호" className={styles.input} />
                {/* <label className={styles.label}>8 characters or more<br/>Contains special characters</label> */}
                <button type="submit" className={styles.button}>로그인</button>
                <a href={"/register"} className={styles.href}>이미 계정이 있으신가요?</a>
            </form>
            <ToastContainer />
        </main>
    );
}
