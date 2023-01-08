import styles from "./About.module.scss";
import React from "react";
import { DEFAULT_URL } from "./Header";

const ABOUT_API_URL = DEFAULT_URL + "aboutUs/getAll";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await fetch(`${ABOUT_API_URL}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result,
        });
      });
  };

  render() {
    const { items } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>О нас в сми</h2>
        <div className={styles.wrapper}>
          {items.slice(0, 3).map((item) => {
            return (
              <a className={styles.card} href={item.Link} target="_blank">
                <img
                  className={styles.card__img}
                  src={`data:image/png;base64,${item.Photos[0]}`}
                  alt="#"
                />
                <h3 className={styles.card__text}>{item.Title}</h3>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default About;
