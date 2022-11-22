import React from 'react';
import styles from './Admin.module.scss';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const ADMIN_API_URL = 'http://localhost:7001/api/admin/';


class Admin extends React.Component {
    state = {
        date: new Date(),
        title: '',
        text: '',
        photos: [],
        videoUrl: '' 
        }
    
        componentDidMount() {
            if (this.props.user) {
            const { date, title, text, photos, videoUrl } = this.props.user
                this.setState({ date, title, text, photos, videoUrl });
            }
        
    }
    onFileChange = e => {
        this.setState({ photos: e.target.files });
    }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }

    submitNew = async () => {
        const formData = new FormData();

        formData.append('date', this.state.date);
        formData.append('title', this.state.title);
        formData.append('text', this.state.text);
        formData.append('videoUrl', this.state.videoUrl);
        
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('photos', this.state.photos[i]);
        }

        try {
            const res = await axios.post(ADMIN_API_URL + 'newsCreate', formData);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
        
    }

    state2 = {
      date: new Date(),
      title: '',
      photos: [] 
      }
  
      componentDidMount2() {
          if (this.props.user) {
          const { date, title, photos } = this.props.user
              this.setState({ date, title, photos });
          }
      
  }

    render() {
    return  <div className={styles.container}>
    
    
    
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Добавить новость</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitNew} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />


    <label htmlFor="text" className={styles.form__label}>Текст</label>
    <input type="text" name="text" className={styles.form__input} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text} />

    <label htmlFor="videoUrl" className={styles.form__label}>Прикрепить ссылку на видео</label>
    <input type="url" name="videoUrl" className={styles.form__input} onChange={this.onChange} value={this.state.videoUrl === null ? '' : this.state.videoUrl} />

<label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
<input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Удалить новость</Accordion.Header>
      <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Добавить фото</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitNew} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state2.date === null ? '' : this.state2.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state2.title === null ? '' : this.state2.title} />


    <label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
    <input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>;
    }
    }
    export default Admin;