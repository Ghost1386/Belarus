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
                
                  <div >
                  <img src={`data:image/png;base64,${item.Photos[0]}`} alt='#' /> 
                   <h2>{item.Title}</h2>
                   
                  </div>
                   
                
            ))}
            </div>
          </div>
        );
      }
    }
  }

  export default Gallery;