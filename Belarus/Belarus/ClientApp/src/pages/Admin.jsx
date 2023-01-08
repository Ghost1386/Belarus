import React from "react";
import styles from "./Admin.module.scss";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { DEFAULT_URL } from "../components/Header";

const ADMIN_API_URL = DEFAULT_URL + "admin/";

class Admin extends React.Component {
  state = {
    date: new Date(),
    title: "",
    mainText: "",
    text: "",
    photos: [],
    videoUrl: "",
    type: "0",
    link: "",
    files: [],
  };

  componentDidMount() {
    if (this.props.user) {
      const { date, title, mainText, text, photos, videoUrl, type, link } =
        this.props.user;
      this.setState({
        date,
        title,
        mainText,
        text,
        photos,
        videoUrl,
        type,
        link,
      });
    }
  }

  onFileChange = (e) => {
    this.setState({ photos: e.target.files });
    this.setState({ files: e.target.files });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNews = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const formData = new FormData();

    formData.append("date", this.state.date);
    formData.append("title", this.state.title);
    formData.append("text", this.state.text);

    if (this.state.videoUrl !== "") {
      formData.append("videoUrl", this.state.videoUrl);
    } else {
      formData.append("videoUrl", "0");
    }

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append("photos", this.state.photos[i]);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createNews",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  delete = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("type", this.state.type);

    if (this.state.type === "4" || this.state.type === "5") {
      formData.append("date", new Date("11.11.2022").toLocaleDateString());
    } else {
      formData.append("date", this.state.date);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "delete",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  submitGallery = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("date", this.state.date);
    formData.append("title", this.state.title);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append("photos", this.state.photos[i]);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createGallery",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  submitContest = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("date", this.state.date);
    formData.append("title", this.state.title);
    formData.append("mainText", this.state.mainText);
    formData.append("text", this.state.text);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append("photos", this.state.photos[i]);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createContest",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  submitAdvertisement = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("date", this.state.date);
    formData.append("title", this.state.title);
    formData.append("mainText", this.state.mainText);
    formData.append("text", this.state.text);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append("photos", this.state.photos[i]);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createPreview",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  submitAboutUs = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("link", this.state.link);

    for (let i = 0; i < this.state.photos.length; i++) {
      formData.append("photos", this.state.photos[i]);
    }

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createAboutUs",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  submitDocuments = async () => {
    const authorizationHeaders = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    const formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("file", this.state.files[0]);
    formData.append("path", this.state.files[0].name);

    try {
      const res = await axios.post(
        ADMIN_API_URL + "createDocument",
        formData,
        authorizationHeaders
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Добавить новость</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitNews} className={styles.form}>
                <label htmlFor="date" className={styles.form__label}>
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.date === null ? "" : this.state.date}
                />

                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="text" className={styles.form__label}>
                  Текст
                </label>
                <textarea
                  rows="10"
                  cols="45"
                  name="text"
                  className={styles.form__inputtext}
                  onChange={this.onChange}
                  value={this.state.text === null ? "" : this.state.text}
                ></textarea>

                <label htmlFor="videoUrl" className={styles.form__label}>
                  Прикрепить ссылку на видео
                </label>
                <input
                  type="url"
                  name="videoUrl"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={
                    this.state.videoUrl === null ? "" : this.state.videoUrl
                  }
                />

                <label htmlFor="file" className={styles.form__label}>
                  Прикрепить фотографии
                </label>
                <input
                  type="file"
                  multiple
                  name="photos"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Добавить фото</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitGallery} className={styles.form}>
                <label htmlFor="date" className={styles.form__label}>
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.date === null ? "" : this.state.date}
                />

                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="file" className={styles.form__label}>
                  Прикрепить фотографии
                </label>
                <input
                  type="file"
                  multiple
                  name="photos"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Добавить конкурс</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitContest} className={styles.form}>
                <label htmlFor="date" className={styles.form__label}>
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.date === null ? "" : this.state.date}
                />

                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="mainText" className={styles.form__label}>
                  Заглавный текст
                </label>
                <input
                  type="text"
                  name="mainText"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={
                    this.state.mainText === null ? "" : this.state.mainText
                  }
                />

                <label htmlFor="text" className={styles.form__label}>
                  Текст
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
                  Прикрепить фотографии
                </label>
                <input
                  type="file"
                  multiple
                  name="photos"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Добавить анонс</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitAdvertisement} className={styles.form}>
                <label htmlFor="date" className={styles.form__label}>
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.date === null ? "" : this.state.date}
                />

                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="mainText" className={styles.form__label}>
                  {" "}
                  Заглавный текст
                </label>
                <input
                  type="text"
                  name="mainText"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={
                    this.state.mainText === null ? "" : this.state.mainText
                  }
                />

                <label htmlFor="text" className={styles.form__label}>
                  Текст
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
                  Прикрепить фотографии
                </label>
                <input
                  type="file"
                  multiple
                  name="photos"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Добавить о нас в СМИ</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitAboutUs} className={styles.form}>
                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="link" className={styles.form__label}>
                  Укажите ссылку{" "}
                </label>
                <input
                  type="url"
                  name="link"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.link === null ? "" : this.state.link}
                />
                <label htmlFor="file" className={styles.form__label}>
                  Прикрепить фотографии
                </label>
                <input
                  type="file"
                  multiple
                  name="photos"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Добавить документ</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.submitDocuments} className={styles.form}>
                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <label htmlFor="file" className={styles.form__label}>
                  Прикрепить файл
                </label>
                <input
                  type="file"
                  multiple
                  name="files"
                  onChange={this.onFileChange}
                  className={styles.form__inputfile}
                />

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Удалить</Accordion.Header>
            <Accordion.Body>
              <form onSubmit={this.delete} className={styles.form}>
                <label htmlFor="date" className={styles.form__label}>
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={
                    this.state.date === null ? new Date() : this.state.date
                  }
                />

                <label htmlFor="title" className={styles.form__label}>
                  Заголовок
                </label>
                <input
                  type="text"
                  name="title"
                  className={styles.form__input}
                  onChange={this.onChange}
                  value={this.state.title === null ? "" : this.state.title}
                />

                <select
                  name="type"
                  onChange={this.onChange}
                  value={this.state.type === null ? "" : this.value}
                >
                  <option value="0">Новости</option>
                  <option value="1">Галлерея</option>
                  <option value="2">Конкурсы</option>
                  <option value="3">Анонсы</option>
                  <option value="4">О нас в СМИ</option>
                  <option value="5">Документ</option>
                </select>

                <input type="submit" />
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}
export default Admin;
