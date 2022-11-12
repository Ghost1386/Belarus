import React from 'react';
import styles from './Appeal.module.scss';
import axios from 'axios';

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

    render() {
    return  <div className={styles.container}>
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
    </div>;
    }
    }
    export default Admin;