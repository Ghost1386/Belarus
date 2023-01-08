import React from "react";
import styles from "./Docs.module.scss";
import { DEFAULT_URL } from "../components/Header";

const DOCUMENTS_API_URL = DEFAULT_URL + "document/getAll";

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = async () => {
    await fetch(`${DOCUMENTS_API_URL}`, {
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
        {items.map((item) => {
          return (
            <div className={styles.wrapper}>
              <h2 className={styles.title}>Документы</h2>
              <div className={styles.item}>
                <h3 className={styles.wrapper__title}>{item.Title}</h3>
                <button className={styles.item__button}>
                  <a href={`../assets/files/${item.FilePath}`}>Скачать</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Docs;
