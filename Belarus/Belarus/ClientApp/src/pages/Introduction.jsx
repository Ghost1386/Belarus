import React from "react";
import styles from "./Introduction.module.scss";
import axios from "axios";
import { DEFAULT_URL } from "../components/Header";

const Introduction_API_URL = DEFAULT_URL + "email/postIntroduction";

class Introduction extends React.Component {
  state = {
    name: "",
    mail: "",
    phone: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { name, mail, phone } = this.props.user;
      this.setState({ name, mail, phone });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitNew = async (e) => {
    const formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("mail", this.state.mail);
    formData.append("phone", this.state.phone);

    try {
      const res = await axios.post(Introduction_API_URL, formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.submitNew} className={styles.form}>
          <label htmlFor="name" className={styles.form__label}>
            ФИО
          </label>
          <input
            type="text"
            name="name"
            className={styles.form__input}
            onChange={this.onChange}
            value={this.state.name === "" ? "" : this.state.name}
          />

          <label htmlFor="mail" className={styles.form__label}>
            Адрес элетронной почты (e-mail)
          </label>
          <input
            type="email"
            name="mail"
            className={styles.form__input}
            onChange={this.onChange}
            value={this.state.mail === null ? "" : this.state.mail}
          />

          <label htmlFor="phone" className={styles.form__label}>
            Телефон
          </label>
          <input
            type="text"
            name="phone"
            className={styles.form__input}
            onChange={this.onChange}
            value={this.state.phone === null ? "" : this.state.phone}
          />

          <button
            className={styles.form__button}
            onClick={() => {
              if (this.state.name === "") return alert("введите имя");
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    );
  }
}
export default Introduction;
