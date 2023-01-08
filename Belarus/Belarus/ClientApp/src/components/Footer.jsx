import styles from "./Footer.module.scss";
import Carousel from "react-bootstrap/Carousel";

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
        <Carousel controls={false} className={styles.carousel}>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer-img.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer1-img.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer2-img.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer3-img.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer4-img.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-flex w-100"
              alt="#"
              src="../assets/images/footer5-img.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Footer;
