import styles from './About.module.scss';

const About = () => {

return (
    <div className={styles.container}>
        <h2 className={styles.title}>О нас в сми</h2>
        <div className={styles.wrapper}>
        <div className={styles.card}>
        <img className={styles.card__img} src="../assets/images/about1.jpg" alt="#" />
        <p className={styles.card__text} >Поезд Победы</p>
     </div>
     <div className={styles.card}>
        <img className={styles.card__img} src="../assets/images/about2.jpg" alt="#" />
        <p className={styles.card__text} >Субботник</p>
     </div>
     <div className={styles.card}>
        <img className={styles.card__img} src="../assets/images/about3.jpg" alt="#" />
        <p className={styles.card__text} >Награждение Белая Русь</p>
     </div>
     
        </div>
        <button className={styles.card__button}><a href="/#">Подробнее</a></button>
    </div>
)

}

export default About;