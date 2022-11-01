import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import styles from './Appeal.module.scss';


const APPEAL_API_URL = 'http://localhost:7001/api/appeal/post';

class Appeal extends React.Component {
    state = {
    name: '',
    mail: '',
    theme: '',
    text: ''
    }
    componentDidMount() {
    if (this.props.user) {
    const { name, mail, theme, text } = this.props.user
    this.setState({ name, mail, theme, text});
    }
    }
    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = e => {
    e.preventDefault();
    fetch(`${APPEAL_API_URL}`, {
    method: 'post',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: this.state.name,
        mail: this.state.mail,
        theme: this.state.theme,
        text: this.state.text
    })
    })
    .then(res => res.json())
    .catch(err => console.log(err));
    }
    render() {
    return  <div className={styles.container}>
    <form onSubmit={this.submitNew} className={styles.form}>
    
    <label htmlFor="name" className={styles.form__label}>ФИО</label>
    <input type="text" name="name" className={styles.form__input} onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
    
    
    <label htmlFor="document" className={styles.form__label}>Адрес элетронной почты (e-mail)</label>
    <input type="text" name="mail" className={styles.form__input} onChange={this.onChange} value={this.state.mail === null ? '' : this.state.mail} />
    
    
    <label htmlFor="email" className={styles.form__label}>Тема обращения</label>
    <input type="email" name="theme" className={styles.form__input} onChange={this.onChange} value={this.state.theme === null ? '' : this.state.theme} />
    
    <label htmlFor="phone" className={styles.form__label}>Текст обращения</label>
    <input type="text" name="text" className={styles.form__input} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text}
    />
    
    <button className={styles.form__button}><a href="/#">Подробнее</a></button>
    </form>
    </div>;
    }
    }
    export default Appeal;

    
