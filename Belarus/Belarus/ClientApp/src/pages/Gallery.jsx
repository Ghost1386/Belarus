import styles from './Gallery.module.scss';

const Gallery = () => {
    return (
        <div className={styles.container}> 
        <h2 className={styles.title}>Событие</h2>
            <div className={styles.wrapper}>
                <img src="../assets/images/gallery1.jpg" alt="" />                
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                <img src="../assets/images/gallery1.jpg" alt="" />
                
            </div>
            <h2 className={styles.title}>Событие</h2>
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