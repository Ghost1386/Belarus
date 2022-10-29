import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Контакты</h2>
            <div className={styles.wrapper}>         
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <img src="../assets/icons/footer1.svg" alt="#" />
                        <p>225710, г. Пинск, ул. Горького, 15</p>
                    </li>
                    <li className={styles.list__item}>
                        <img src="../assets/icons/footer2.svg" alt="#" />
                        <p>+375 165 61-35-58</p>
                    </li>
                    <li className={styles.list__item}>
                        <img src="../assets/icons/footer3.svg" alt="#" />
                        <p>@belayarus_pinsk</p>
                    </li>
                    <li className={styles.list__item}>
                        <img src="../assets/icons/footer4.svg" alt="#" />
                        <p>belayaruspinsk@tut.by</p>
                    </li>
                </ul>
            <img src="" alt="#" />
            </div>
        </div>
    )
}

export default Footer;