import React from "react";
import styles from "./NewsDetails.module.scss";
import { DEFAULT_URL } from "../components/Header";

const CONTESTS_API_URL = DEFAULT_URL + "contest/get";

function Check() {
  let queryString = document.location.pathname;
  return queryString.slice(17);
}

class ContestnsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }
  componentDidMount = async () => {
    const f = Check();
    await fetch(`${CONTESTS_API_URL}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: f,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  render() {
    const { items } = this.state;

    return (
      <div className={styles.container}>
        {items.map((item) => (
          <div className={styles.wrapper}>
            <p className={styles.wrapper__date}>
              {new Date(item.Date).toLocaleDateString()}
            </p>
            <h2 className={styles.wrapper__title}>{item.Title}</h2>
            <p className={styles.wrapper__text}>{item.Text}</p>
            {item.Photos.map((item) => (
              <img src={`data:image/png;base64,${item}`} alt="#" />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default ContestnsDetails;
