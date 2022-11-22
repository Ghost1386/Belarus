import styles from './Management.module.scss';

const Management = () => {

return (
    <div className={styles.container}>
       <h2 className={styles.title}>
       Руководство
       </h2>
       <div className={styles.item}>
            <img src="../assets/images/management1.jpg" alt="#" className={styles.item__img}/>
            <div className={styles.item__content}>
                <h3 className={styles.item__content_title}>Романов Олег Александрович</h3>
                <p className={styles.item__content_text}>Председатель Республиканского Совета</p>
                <p className={styles.item__content_text}>тел.8-017-324-18-57</p>
            </div>
       </div>
       <div className={styles.item}>
            <img src="../assets/images/management2.jpg" alt="#" className={styles.item__img}/>
            <div className={styles.item__content}>
                <h3 className={styles.item__content_title}>Баханович Александр Геннадьевич</h3>
                <p className={styles.item__content_text}>Председатель Совета</p>
                <p className={styles.item__content_text}>тел. 8-016-256-75-55</p>
            </div>
       </div>
       <div className={styles.item}>
            <img src="../assets/images/management3.jpg" alt="#" className={styles.item__img}/>
            <div className={styles.item__content}>
                <h3 className={styles.item__content_title}>Романов Олег Александрович</h3>
                <p className={styles.item__content_text}>Председатель Совета</p>
                <p className={styles.item__content_text}>тел. 8-0165-32-27-05</p>
            </div>
       </div>
    </div>
)

}

export default Management;