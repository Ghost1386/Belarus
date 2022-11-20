import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import {Dropdown, Button, ButtonGroup, Nav, Navbar, Container} from 'react-bootstrap';

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
        {/* <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                 
                           
                </li>
                <li className={styles.nav__item}>
               
                </li>
                <li className={styles.nav__item}>
                
                </li>
                <li className={styles.nav__item}>
                
                </li>
                <li className={styles.nav__item}>
                
                </li>
                <li className={styles.nav__item}>
                
                </li>
                <li className={styles.nav__item}>
                
                    
                </li>
            </ul>
        </nav> */}
        <Navbar  expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={styles.nav__item}>
            <Dropdown as={ButtonGroup}>
                    
                    <Button variant="none"><Link to="/">Главая</Link></Button>
                    <Dropdown.Toggle split variant="none"  id="dropdown-custom-2" />
                    <Dropdown.Menu>
                    <Dropdown.Item href="/management">Руководство</Dropdown.Item>
                    <Dropdown.Item href="/council">Совет Пинской организации</Dropdown.Item>
                    
                 </Dropdown.Menu>
            </Dropdown> 
            </Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none" className={styles.btn} ><Link to="/news">Новости</Link></Button></Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none"><Link to="/gallery">Фотогалерея</Link></Button></Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none"><Link to="/sign">Тест</Link></Button></Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none"><Link to="/admin">Админ</Link></Button></Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none"><Link to="/introduction"><span>Вступить в организацию</span></Link></Button></Nav.Link>
            <Nav.Link href="#link" className={styles.nav__item}> <Button variant="none"><Link to="/introduction"><Link to="/appeal"><span>Электронное обращение</span></Link></Link></Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
        </div>
    )
}

export default Header;