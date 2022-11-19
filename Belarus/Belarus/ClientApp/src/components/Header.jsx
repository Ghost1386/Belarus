import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup} from 'react-bootstrap';

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
                 
                <Dropdown as={ButtonGroup}>
                    
                    <Button variant="none"><Link to="/">Главая</Link></Button>
                    <Dropdown.Toggle split variant="none"  id="dropdown-custom-2" />
                    <Dropdown.Menu>
                    <Dropdown.Item href="/management">Руководство</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Совет Пинской организации</Dropdown.Item>
                    
                 </Dropdown.Menu>
            </Dropdown>            
                </li>
                <li className={styles.nav__item}>
                <Button variant="none" className={styles.btn} ><Link to="/news">Новости</Link></Button>
                </li>
                <li className={styles.nav__item}>
                <Button variant="none"><Link to="/gallery">Фотогалерея</Link></Button>
                </li>
                <li className={styles.nav__item}>
                <Button variant="none"><Link to="/sign">Тест</Link></Button>
                </li>
                <li className={styles.nav__item}>
                <Button variant="none"><Link to="/admin">Админ</Link></Button>
                </li>
                <li className={styles.nav__item}>
                <Link to="/introduction"><span>Вступить в организацию</span></Link>
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