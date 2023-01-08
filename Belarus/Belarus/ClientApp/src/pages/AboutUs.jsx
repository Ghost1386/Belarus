import React from "react";
import styles from "./AboutUs.module.scss";
import { DEFAULT_URL } from "../components/Header";

const ABOUT_API_URL = DEFAULT_URL + "aboutUs/getAll";

class AboutUs extends React.Component {
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
        <div className={styles.wrapper}>
          {items.map((item) => {
            return (
              <div className={styles.wrapper__item}>
                <a href={item.Link} target="_blank">
                  <img
                    src={`data:image/png;base64,${item.Photos[0]}`}
                    alt="#"
                  />
                  <h2>{item.Title}</h2>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AboutUs;
