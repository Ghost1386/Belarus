import styles from './Gallery.module.scss';

const Gallery = () => {
    return (
        <div className={styles.container}> 
        <div className={styles.title}>
            <h3>Событие</h3>
            <p>01.11.2022</p>
            </div>
            <div className={styles.wrapper}>
                <img src="../assets/images/gallery1.jpg" alt="" />                
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                
            </div>
            <div className={styles.title}>
            <h3>Событие</h3>
            <p>01.11.2022</p>
            </div>
            <div className={styles.wrapper}>
                <img src="../assets/images/gallery1.jpg" alt="" />                
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                
            </div>
        </div>
    );
};

export default Gallery;