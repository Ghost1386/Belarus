import React from 'react';

const ALL_NEWS_API_URL = 'http://localhost:7001/api/news/newsGetAll';

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
            
          <div >
            {items.map(item => (
                <div >
                  <div >
                  <img alt='#' src={`data:image/png;base64,${item.Photos[0]}`} /> 
                   <h2>{item.Title}</h2>
                   <p>{item.Text}</p>
                   <button><a href="/#">Подробнее</a></button>
                   
                  </div>
                   
                </div>
            ))}
          </div>
          
        );
      }
    }
  }

  export default NewsDetails;