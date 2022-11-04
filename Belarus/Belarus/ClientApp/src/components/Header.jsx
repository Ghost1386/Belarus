import styles from './Header.module.scss';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
            <img className={styles.logo1} src="../assets/icons/header-logo1.png" alt="#" />
            <img className={styles.logo2} src="../assets/icons/header-logo2.png" alt="#" />
            <h1 className={styles.title}><p>Белая Русь</p>
                Пинская городская организация</h1>
            <form className={styles.form}>
            <input className={styles.input} type="text" placeholder="Поиск"></input>
            </form>
        </div>
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                <Link to="/">Главая</Link>               
                </li>
                <li className={styles.nav__item}>
                <Link to="/">Новости</Link>
                </li>
                <li className={styles.nav__item}>
                <Link to="/">Фотогалерея</Link>
                </li>
                <li className={styles.nav__item}>
                <Link to="/">Документы</Link>
                </li>
                <li className={styles.nav__item}>
                <Link to="/">Первичные организация</Link>
                </li>
                <li className={styles.nav__item}>
                <Link to="/"><span>Вступить в организацию</span></Link>
                </li>
                <li className={styles.nav__item}>
                <Link to="/appeal"><span>Электронное обращение</span></Link>
                    
                </li>
            </ul>
        </nav>

    
        </div>
    )
}

export default Header;