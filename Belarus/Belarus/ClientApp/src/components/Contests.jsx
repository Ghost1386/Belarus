import styles from './Contests.module.scss';

const Contests = () => {

return(
    <div className={styles.container}>
        <h2 className={styles.title}>Конкурсы </h2>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src="../assets/icons/contest-icon.svg" alt="#" className={styles.card__img} />
                <div className={styles.card__content}>
                   <h3>Название конкурса</h3> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, malesuada morbi in ullamcorper massa. Fringilla libero enim donec lectus volutpat lobortis quis nibh quam. </p>
                </div>
                <button className={styles.card__button}><a href='/#'>Скачать</a></button>
            </div>
            <div className={styles.card}>
            <img src="../assets/icons/contest-icon.svg" alt="#" className={styles.card__img} />
                <div className={styles.card__content}>
                   <h3>Название конкурса</h3> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, malesuada morbi in ullamcorper massa. Fringilla libero enim donec lectus volutpat lobortis quis nibh quam. </p>
                </div>
                <button className={styles.card__button}><a href='/#'>Скачать</a></button>
            </div>
            <div className={styles.card}>
            <img src="../assets/icons/contest-icon.svg" alt="#" className={styles.card__img} />
                <div className={styles.card__content}>
                   <h3>Название конкурса</h3> 
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, malesuada morbi in ullamcorper massa. Fringilla libero enim donec lectus volutpat lobortis quis nibh quam. </p>
                </div>
                <button className={styles.card__button}><a href='/#'>Скачать</a></button>
            </div>
        </div>
    </div>
)

}

export default Contests;