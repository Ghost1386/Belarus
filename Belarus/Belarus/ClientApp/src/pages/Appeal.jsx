import React from "react";
import styles from "./Appeal.module.scss";
import axios from "axios";
import { DEFAULT_URL } from "../components/Header";

const APPEAL_API_URL = DEFAULT_URL + "email/postAppeal";

class Appeal extends React.Component {
  state = {
    name: "",
    mail: "",
    subject: "",
    text: "",
    filesList: [],
  };

  componentDidMount() {
    if (this.props.user) {
      const { name, mail, subject, text, filesList } = this.props.user;
      this.setState({ name, mail, subject, text, filesList });
    }
  }
  onFileChange = (e) => {
    this.setState({ filesList: e.target.files });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitNew = async (e) => {
    const formData = new FormData();

    formData.append("name", this.state.name);
    formData.append("mail", this.state.mail);
    formData.append("subject", this.state.subject);
    formData.append("text", this.state.text);

    for (let i = 0; i < this.state.filesList.length; i++) {
      formData.append("formFile", this.state.filesList[i]);
    }

    try {
      const res = await axios.post(APPEAL_API_URL, formData);
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

          <label htmlFor="subject" className={styles.form__label}>
            Тема обращения
          </label>
          <input
            type="text"
            name="subject"
            className={styles.form__input}
            onChange={this.onChange}
            value={this.state.subject === null ? "" : this.state.subject}
          />

          <label htmlFor="text" className={styles.form__label}>
            Текст обращения
          </label>
          <textarea
            rows="10"
            cols="45"
            name="text"
            className={styles.form__inputtext}
            onChange={this.onChange}
            value={this.state.text === null ? "" : this.state.text}
          ></textarea>

          <label htmlFor="file" className={styles.form__label}>
            Прикрепить файлы
          </label>
          <input
            type="file"
            multiple
            name="filesList"
            onChange={this.onFileChange}
            className={styles.form__inputfile}
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
export default Appeal;
