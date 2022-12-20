import React from 'react';
import styles from './NewsDetails.module.scss';

const ADVERTISEMENTS_API_URL = 'http://localhost:7001/api/preview/previewGet';


function Check (){
  let queryString = document.location.pathname;
  return queryString.slice(22);
}

class AdvertisementDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    componentDidMount = async () => {
      const f = Check();
      await fetch(`${ADVERTISEMENTS_API_URL}`, {
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
            
            {items.map(item => (   
              <div className={styles.wrapper}>
                    <p className={styles.wrapper__date}>{item.Date}</p>
                    <h2 className={styles.wrapper__title}>{item.Title}</h2>                   
                    <p className={styles.wrapper__text}>{item.Text}</p>
                    {item.Photos.map(item => (   
              
              <img src={`data:image/png;base64,${item}`} alt='#' /> 
                    
        ))}
                    </div>     
            ))}
            
          </div>
        );
      }
    }
  }

  export default AdvertisementDetails;