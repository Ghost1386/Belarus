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
        selectedFile: null
        }
    
        componentDidMount() {
            if (this.props.user) {
            const { name, mail, theme, text, selectedFile } = this.props.user
                this.setState({ name, mail, theme, text, selectedFile });
            }
        
    }
    onFileChange = e => {
        this.setState({ selectedFile: e.target.files[0] });
    }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = async () => {
        const formData = new FormData();

        formData.append('formFile', this.state.selectedFile);
        formData.append('fileName', this.state.selectedFile.name);
        formData.append('name', this.state.name);
        formData.append('mail', this.state.mail);
        formData.append('theme', this.state.theme);
        formData.append('text', this.state.text);

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
    <input type="file" name="selectedFile" onChange={this.onFileChange} className={styles.form__inputfile}/>
    
    <button className={styles.form__button} onClick={() => {if (this.state.name === '') return alert('введите имя')}}>Отправить</button>
    </form>
    </div>;
    }
    }
    export default Appeal;

    
