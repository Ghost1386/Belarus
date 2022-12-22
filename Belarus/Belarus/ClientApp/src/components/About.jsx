import styles from './About.module.scss';

const About = () => {

return (
    <div className={styles.container}>
        <h2 className={styles.title}>О нас в сми</h2>
        <div className={styles.wrapper}>
        <a className={styles.card} href='https://www.sb.by/articles/15-let-vmeste-so-stranoy.html'>
        <img className={styles.card__img} src="../assets/images/about1.jpg" alt="#" />
        <p className={styles.card__text} >«Белой Руси» — 15 лет! Цифры и факты о крупнейшей общественной организации страны</p>
     </a>
     <a className={styles.card} href='https://p-v.by/news/society/segodnya-v-minske-respublikanskoe-obshhestvennoe-obedinenie-belaya-rus-podvodit-itogi-ocherednoj-pyatiletki-v-rabote-iv-sezda-prinimayut-uchastie-okolo-500-delegatov-so-vsej-strany/#:~:text=%D0%9E%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE-,%D0%A1%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F%20%D0%B2%20%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B5%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BE%D0%B1%D1%8A%D0%B5%D0%B4%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%C2%AB%D0%91%D0%B5%D0%BB%D0%B0%D1%8F%20%D0%A0%D1%83%D1%81%D1%8C%C2%BB%20%D0%BF%D0%BE%D0%B4%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%20%D0%B8%D1%82%D0%BE%D0%B3%D0%B8%20%D0%BE%D1%87%D0%B5%D1%80%D0%B5%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%BF%D1%8F%D1%82%D0%B8%D0%BB%D0%B5%D1%82%D0%BA%D0%B8.%20%D0%92%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%20IV%20%D1%81%D1%8A%D0%B5%D0%B7%D0%B4%D0%B0%20%D0%BF%D1%80%D0%B8%D0%BD%D0%B8%D0%BC%D0%B0%D1%8E%D1%82%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D0%B5%20%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%20500%20%D0%B4%D0%B5%D0%BB%D0%B5%D0%B3%D0%B0%D1%82%D0%BE%D0%B2%20%D1%81%D0%BE%20%D0%B2%D1%81%D0%B5%D0%B9%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%8B,-18.06.2022'>
        <img className={styles.card__img} src="../assets/images/about2.jpg" alt="#" />
        <p className={styles.card__text} >Сегодня в Минске Республиканское общественное объединение «Белая Русь» подводит итоги очередной пятилетки.</p>
     </a>
     <a className={styles.card} href='https://p-v.by/news/society/belaya-rus-s-lyubovyu-k-detyam/#:~:text=%D0%9E%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE-,%C2%AB%D0%91%D0%B5%D0%BB%D0%B0%D1%8F%20%D0%A0%D1%83%D1%81%D1%8C%C2%BB%3A%20%D1%81%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%D1%8E%20%D0%BA%20%D0%B4%D0%B5%D1%82%D1%8F%D0%BC,-06.07.2022'>
        <img className={styles.card__img} src="../assets/images/about3.jpg" alt="#" />
        <p className={styles.card__text} >«Белая Русь»: с любовью к детям</p>
     </a>
     
        </div>
    </div>
)

}

export default About;