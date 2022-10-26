import styles from './Header.module.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Appeal from '../pages/Appeal';

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
<Navbar>
    <Container>
        <Nav>
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/">Новости</Nav.Link>
            <Nav.Link href="/">Фотогалерея</Nav.Link>
            <Nav.Link href="/">Документы</Nav.Link>
            <Nav.Link href="/">Первичные организации</Nav.Link>
            <Nav.Link href="/">Вступить в организацию</Nav.Link>
            <Nav.Link href="/appeal">Электронное обращение</Nav.Link>
        </Nav>
    </Container>
</Navbar>
    <Routes>
        <Route exact path="/appeal" element={<Appeal/>}/>
    </Routes>
        </div>
    )
}

export default Header;