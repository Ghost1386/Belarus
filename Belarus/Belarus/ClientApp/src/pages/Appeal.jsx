import React from 'react';
import styles from './Appeal.module.scss';
import axios from 'axios';

const APPEAL_API_URL = 'http://localhost:7001/api/appeal/post';


class Appeal extends React.Component {
    state = {
        name: '',
        mail: '',
        theme: '',
        text: '',
        filesList: []
        }
    
        
        componentDidMount() {
            if (this.props.user) {
            const { name, mail, theme, text, filesList } = this.props.user
                this.setState({ name, mail, theme, text, filesList });
            }
        
    }
    onFileChange = e => {
        this.setState({ filesList: e.target.files });
    }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = async (e) => {
        const formData = new FormData();
        
        formData.append('name', this.state.name);
        formData.append('mail', this.state.mail);
        formData.append('theme', this.state.theme);
        formData.append('text', this.state.text);
        
        for (let i = 0; i < this.state.filesList.length; i++) {
            formData.append('formFile', this.state.filesList[i]);
        }

        try {
            const res = await axios.post(APPEAL_API_URL, formData);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
    }

    render() {
    return  <div className={styles.container}>
    <form onSubmit={this.submitNew} className={styles.form}>
    
    <label htmlFor="name" className={styles.form__label}>ФИО</label>
    <input type="text" name="name" className={styles.form__input} onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
    
    
    <label htmlFor="mail" className={styles.form__label}>Адрес элетронной почты (e-mail)</label>
    <input type="email" name="mail" className={styles.form__input} onChange={this.onChange} value={this.state.mail === null ? '' : this.state.mail} />
    
    
    <label htmlFor="theme" className={styles.form__label}>Тема обращения</label>
    <input type="text" name="theme" className={styles.form__input} onChange={this.onChange} value={this.state.theme === null ? '' : this.state.theme} />
    
    <label htmlFor="text" className={styles.form__label}>Текст обращения</label>
    <input type="text" name="text" className={styles.form__inputtext} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text}/>
    
    <label htmlFor="file" className={styles.form__label}>Прикрепить файлы</label>
    <input type="file" multiple name="filesList" onChange={this.onFileChange} className={styles.form__inputfile}/>
    
    <button className={styles.form__button} onClick={() => {if (this.state.name === '') return alert('введите имя')}}>Отправить</button>
    </form>
    </div>;
    }
    }
    export default Appeal;

    
