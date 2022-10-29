import styles from './Advertisement.module.scss';

const Advertisement = () => {

return(
    <div className={styles.container}>
        <h2 className={styles.title}>Анонсы мероприятий </h2>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h3 className={styles.card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className={styles.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aenean a donec natoque praesent amet purus.</p>
                <button className={styles.card_button}><a>Читать</a></button>
            </div>
            <div className={styles.card}>
                <h3 className={styles.card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className={styles.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aenean a donec natoque praesent amet purus.</p>
                <button className={styles.card_button}><a>Читать</a></button>
            </div>
            <div className={styles.card}>
                <h3 className={styles.card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className={styles.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aenean a donec natoque praesent amet purus.</p>
                <button className={styles.card_button}><a>Читать</a></button>
            </div>
            <div className={styles.card}>
                <h3 className={styles.card__title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <p className={styles.card__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit aenean a donec natoque praesent amet purus.</p>
                <button className={styles.card_button}><a>Читать</a></button>
            </div>
        </div>
    </div>
)

}

export default Advertisement;