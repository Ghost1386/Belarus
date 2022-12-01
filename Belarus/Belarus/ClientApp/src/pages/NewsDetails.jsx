import React from 'react';
import { useParams } from 'react-router';

const NEWS_API_URL = 'http://localhost:7001/api/news/newsGet';

class NewsDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    componentDidMount = async () => {
      await fetch(`${NEWS_API_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: 3
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
          <div>
            <div>
            {items.map(item => (              
                  <div>
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

  export default NewsDetails;