import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import {
  Dropdown,
  Button,
  ButtonGroup,
  Nav,
  Navbar,
  Container,
} from "react-bootstrap";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          className={styles.logo1}
          src="../assets/icons/header-logo1.png"
          alt="#"
        />
        <img
          className={styles.logo2}
          src="../assets/icons/header-logo2.png"
          alt="#"
        />
        <h1 className={styles.title}>
          <p>Белая Русь</p>
          Пинская городская организация
        </h1>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Поиск"
          ></input>
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
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.nav__item} as={Link} to="/">
                <Dropdown as={ButtonGroup}>
                  <Button variant="none">Главная</Button>
                  <Dropdown.Toggle
                    split
                    variant="none"
                    id="dropdown-custom-2"
                  />
                  <Dropdown.Menu>
                    <Dropdown.Item href="/management">
                      Руководство
                    </Dropdown.Item>
                    <Dropdown.Item href="/council">
                      Совет Пинской организации
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
              <Nav.Link className={styles.nav__item} as={Link} to="/news">
                {" "}
                <Button variant="none" className={styles.btn}>
                  Новости
                </Button>
              </Nav.Link>
              <Nav.Link className={styles.nav__item} as={Link} to="/gallery">
                {" "}
                <Button variant="none" className={styles.btn}>
                  Фотогалерея
                </Button>
              </Nav.Link>
              <Nav.Link className={styles.nav__item} as={Link} to="/sign">
                {" "}
                <Button variant="none" className={styles.btn}>
                  Тест
                </Button>
              </Nav.Link>
              <Nav.Link className={styles.nav__item} as={Link} to="/admin">
                {" "}
                <Button variant="none" className={styles.btn}>
                  Админ
                </Button>
              </Nav.Link>
              <Nav.Link
                className={styles.nav__item}
                as={Link}
                to="/introduction"
              >
                {" "}
                <Button variant="none" className={styles.btn}>
                  <span>Вступить в организацию</span>
                </Button>
              </Nav.Link>
              <Nav.Link className={styles.nav__item} as={Link} to="/appeal">
                {" "}
                <Button variant="none" className={styles.btn}>
                  <span>Электронное обращение</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;