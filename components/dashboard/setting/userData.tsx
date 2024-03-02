import style from '@/styles/dashboard/components/setting/page.module.scss'

export function DashboardSettingUserData() {
    return (
        <section className={style.container}>
            <span className={style.title}>아티스트 정보</span>
            <div className={style.sectionContainer}>
                <div className={style.sectionValueContainer}>
                    <span className={style.sectionTitle}>아티스트 이름</span>
                    <span className={style.sectionValue}>정태욱</span>
                </div>
                <button className={style.sectionButton}>이름 변경하기</button>
            </div>
            <div className={style.sectionContainer}>
                <div className={style.sectionValueContainer}>
                    <span className={style.sectionTitle}>이메일</span>
                    <span className={style.sectionValue}>appasdasda@gmail.com</span>
                </div>
                <button className={style.sectionButton}>이메일 변경하기</button>
            </div>
            <div className={style.sectionContainer}>
                <div className={style.sectionValueContainer}>
                    <span className={style.sectionTitle}>비밀번호</span>
                    <button className={style.primaryButton}>비밀번호 변경하기</button>
                </div>
            </div>
            <hr className={style.hr} />
        </section>
    );
}