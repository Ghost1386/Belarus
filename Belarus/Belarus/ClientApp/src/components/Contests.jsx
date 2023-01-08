import React from "react";
import styles from "./Contests.module.scss";
import { Link } from "react-router-dom";
import { DEFAULT_URL } from "./Header";

const ALL_CONTESTS_API_URL = DEFAULT_URL + "contest/getAll";

class Contests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount = async () => {
    await fetch(ALL_CONTESTS_API_URL)
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
    const { error, isLoaded, items } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Конкурсы </h2>
        <div className={styles.wrapper}>
          {items.map((item) => (
            <div className={styles.wrapper__item}>
              <img
                src="../assets/icons/contests-icon.svg"
                alt="#"
                className={styles.wrapper__icon}
              />
              <div className={styles.item__content}>
                <h3>{item.Title}</h3>
                <p>{item.MainText}</p>
              </div>
              <button className={styles.wrapper__button}>
                <Link to={`/contestsDetails/${item.Id}`}>Подробнее</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contests;
