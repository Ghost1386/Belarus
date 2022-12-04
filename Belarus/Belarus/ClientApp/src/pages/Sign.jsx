import React, { useState } from 'react'
import styles from './Sign.module.scss';

const AUTH_API_URL = 'http://localhost:7001/api/auth/post';

export default function Register () {
    const [register, setRegister] = useState(() => {
        return {
            login: "",
            password: "",
        }
    })
     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
     
     
    const submitChackin = e => {

        e.preventDefault();

        const token = fetch(`${AUTH_API_URL}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: register.login,
                password: register.password
            })
        })
            .then(res => res.json())

        localStorage.setItem('token', token);
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={submitChackin}>
                <label className={styles.form__label}>Логин</label>
                <input 
                className={styles.form__input}
                type="login"
                id="login"
                name="login"
                value={register.login}
                onChange={changeInputRegister}
                />
                
                <label className={styles.form__label}>Пароль</label>
                <input 
                className={styles.form__input}
                type="password"
                id="password"
                name="password"
                value={register.password}
                onChange={changeInputRegister}
                />
                
                <input className={styles.form__button} type="submit"/>
            </form>
        </div>
    )
}