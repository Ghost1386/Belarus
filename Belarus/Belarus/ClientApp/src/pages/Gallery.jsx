import React from 'react';
import styles from './Gallery.module.scss';
import { Link } from 'react-router-dom';

const ALL_GALLERY_API_URL = 'http://localhost:7001/api/gallery/galleryGetAll';

class Gallery extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount = async () => {
        await fetch(ALL_GALLERY_API_URL)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                items: result,
                isLoaded: true
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
          <div className={styles.container}>
            <div className={styles.wrapper}>
            {items.map(item => ( 
                  <div className={styles.item}>
                    <div className={styles.item__content}>
                    <h2 className={styles.item__title}>{item.Title}</h2>
                    <p className={styles.item__date}>{new Date(item.Date).toLocaleDateString()}</p>
                    </div>
                    
                      <div className={styles.item__img}>
                      {item.Photos.map(item => ( 
                  
                  <img src={`data:image/png;base64,${item}`} alt='#' />
             
                    ))} 
                      </div>
                    
                                                        
                  </div>               
            ))}
            <div >
                      
            </div>           
            </div>
            
          </div>
          
        );
      }
    }
  }

  export default Gallery;