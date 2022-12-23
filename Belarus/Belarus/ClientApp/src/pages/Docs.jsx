import styles from './Docs.module.scss';

const Docs = () => {

return (
    <div className={styles.container}>
       <h2 className={styles.title}>
       Руководство
       </h2>
       <div className={styles.item}>
        <p className={styles.item__text}>План работы на 2022 год</p>
        <button className={styles.item__button}><a href="https://vk.com/doc181181358_651713121?hash=JQfwdQDmcrmgzkOnxliJZ81MF4masEIZiYoge7VXMl8&dl=tNmx61NkyYXfDUIEIJhHOLJ3Capugyaqf6amLzxroZP">Скачать</a></button> 
       </div>
       <div className={styles.item}>
        <p className={styles.item__text}>Программа РОО “Белая Русь”</p>
        <button className={styles.item__button}><a href="https://vk.com/doc181181358_651713123?hash=tX6w3P5TdeFX2Wi2c8Z9baFLXjWXFZd6Rrjs0eSCHHL&dl=XQz2p49IlquL3aCRv9hsD0CpR8PtPp0dNiiSCZj9neH">Скачать</a></button> 
       </div>
       <div className={styles.item}>
        <p className={styles.item__text}>Устав</p>
        <button className={styles.item__button}><a href="https://vk.com/doc181181358_651713120?hash=FUiMjSS5I4Ue8edjZxJP90Irpyn202AACjobHxQFA0P&dl=7eHC5Wq3ksbtxMKbRxzN4u06BQKWR5I2qfs3EydWWfD">Скачать</a></button> 
       </div>
       <div className={styles.item}>
        <p className={styles.item__text}>Список первичных организаций</p>
        <button className={styles.item__button}><a href="https://vk.com/doc181181358_651713143?hash=OV36WK41QhO30V0SKtkaXxIkdAfqmzZbfcBPla9yAOg&dl=zRz0FzRGpCbbSoMGjojZTsBYJR71PngzQeOKFP3K9B4">Скачать</a></button> 
       </div>
    </div>
)

}

export default Docs;