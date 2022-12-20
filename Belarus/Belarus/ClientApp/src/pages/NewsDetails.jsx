import React from 'react';
import styles from './NewsDetails.module.scss';

const NEWS_API_URL = 'http://localhost:7001/api/news/newsGet';


function Check (){
  let queryString = document.location.pathname;
  return queryString.slice(13);
}

class NewsDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
    componentDidMount = async () => {
      const f = Check();
      await fetch(`${NEWS_API_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: f
        })
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
              items: result,
          });
        }  
      )
    }
  
    render() {
      const { items } = this.state;
        return(
          <div className={styles.container}>
            {items.map(item => {  
              if (item.VideoUrl !== '0') {
                return (
                <div className={styles.wrapper}>
                    <p className={styles.wrapper__text}>{item.Date}</p>
                    <h2 className={styles.wrapper__title}>{item.Title}</h2>                   
                    <p className={styles.wrapper__text}>{item.Text}</p>
                    {item.Photos.map(item => (   
              
              <img src={`data:image/png;base64,${item}`} alt='#' /> 
                    
        ))}
                    <a href={item.VideoUrl}>Ссылка на видео</a>
                    </div>   
            )}
              else
              {
                return (
                <div className={styles.wrapper}>
                    <p className={styles.wrapper__text}>{item.Date}</p>
                    <h2 className={styles.wrapper__title}>{item.Title}</h2>                   
                    <p className={styles.wrapper__text}>{item.Text}</p>
                    {item.Photos.map(item => (   
              
              <img src={`data:image/png;base64,${item}`} alt='#' /> 
                    
        ))}
                    </div>   
            )}
                
    })}
          </div>
        );
      }
    }

  export default NewsDetails;