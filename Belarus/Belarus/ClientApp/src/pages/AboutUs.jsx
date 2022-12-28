import React from 'react';
import styles from './AboutUs.module.scss';

const ABOUT_API_URL = 'http://localhost:7001/api/aboutUs/getAllAboutUs';


class AboutUs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
    }
    componentDidMount = async () => {

      await fetch(`${ABOUT_API_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
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
              
                return (
                <div className={styles.wrapper}>
                                               
              <a className={styles.card} href={item.Link} target="_blank">
              <img src={`data:image/png;base64,${item.Photos[0]}`} alt='#' />
              <h2 className={styles.wrapper__title}>{item.Title}</h2>  
     </a>
                    </div>   
            )
             
                
    })}
          </div>
        );
      }
    }

  export default AboutUs;