import React from 'react';
import styles from './News.module.scss';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ListItem } from '@mui/material';

const ALL_NEWS_API_URL = 'http://localhost:7001/api/news/newsGetAll'; 

class News extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    
    componentDidMount = async () => {
        await fetch(ALL_NEWS_API_URL)
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
                  <div className={styles.wrapper__item}>
                  <img src={`data:image/png;base64,${item.Photos[0]}`} alt='#' /> 
                   <h2>{item.Title}</h2>
                    <button><Link to={`/newsDetails/${item.Id}`}>Фотогалерея</Link></button>         
                  </div>         
            ))}
            </div>
          </div>
        );
      }
    }
  }

  export default News;

