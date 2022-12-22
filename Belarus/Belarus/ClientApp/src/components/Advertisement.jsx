import React from 'react';
import styles from './Advertisement.module.scss';
import { Link } from 'react-router-dom';

const ALL_ADVERTISEMENTS_API_URL = 'http://localhost:7001/api/preview/previewGetAll';


class Advertisement extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount = async () => {
        await fetch(ALL_ADVERTISEMENTS_API_URL)
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
      const {items } = this.state;

        return (
          <div className={styles.container}>
            <h2 className={styles.title}>Анонсы мероприятий </h2>
            <div className={styles.wrapper}>             
            {items.map(item => (
                  <div className={styles.wrapper__item}>                   
                   <h3>{item.Title}</h3>
                   <p>{item.MainText}</p> 
                   <button className={styles.wrapper__button}><Link to={`/advertisementDetails/${item.Id}`}>Подробнее</Link></button>                 
                  </div>  
            ))}
            </div>
            
          </div>
        );
      }
    }
  

  export default Advertisement;