import React, { useState } from 'react'
import AdvertisementDetails from './AdvertisementDetails';
import styles from './Sign.module.scss';
import { Navigate, redirect } from "react-router-dom";
import { render } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const AUTH_API_URL = 'http://localhost:7001/api/auth/post';


export default function Register () {

    const [register, setRegister] = useState(() => {
        return {
            login: "",
            password: "",
        }
    })

    const [token, setToken] = useState("");

    const navigate = useNavigate();

    const goHome = () => {
        if(token !== '')
        {
            localStorage.setItem('token', token);
            navigate("/admin");    
        } 
      };

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }
     
     
    const submitChackin = async e => {

        e.preventDefault();

        await fetch(`${AUTH_API_URL}`, {
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
        .then((result) => 
        {
            setToken(result)
        })
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
                
                <input className={styles.form__button} type="submit"  onSubmit={goHome()}/>
            </form>
        </div>
    )
}

