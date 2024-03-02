'use client'

import Image from "next/image";
import styles from '@/styles/auth/page.module.scss';
import { ToastContainer } from "react-toastify";
import { loginAction } from "@/actions/login";
import { useFormState } from "react-dom";
import Logo from '@/public/logo.svg';

const initialState = {
    message: '',
}

export default function Login() {
    const [state, formAction] = useFormState(loginAction, initialState)

    return (
        <main className={styles.container}>
            <Image src={Logo} alt="Cosmose" width={40} />
            <h1 className={styles.title}>Cosmose 가입하기</h1>
            <form className={styles.form} action={formAction}>
                <label className={styles.label}>이메일</label>
                <input type="email" id="email" placeholder="name@example.com" className={styles.input} />
                <label className={styles.label}>Cosmose 이름</label>
                <input type="text" id="username" placeholder="Cosmose 이름" className={styles.input} />
                <label className={styles.label}>비밀번호</label>
                <input type="password" id="password" placeholder="비밀번호" className={styles.input} />
                <label className={styles.label}>비밀번호 확인</label>
                <input type="password" id="passwordConfirm" placeholder="비밀번호 확인" className={styles.input} />
                {/* <label className={styles.label}>8 characters or more<br/>Contains special characters</label> */}
                <button type="submit" className={styles.button}>가입하기</button>
                <a href={"/register"} className={styles.href}>이미 계정이 있으신가요?</a>
            </form>
            <ToastContainer />
        </main>
    );
}
