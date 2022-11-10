

import React, { useState } from 'react'
import axios from 'axios';


const AUTH_API_URL = 'http://localhost:7001/api/auth/post';
const AUTH_SITE_URL = 'https://localhost:44458/sign';
const token = '';

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
     
     
    const submitChackin = event => {
        event.preventDefault();

        
            axios.post(AUTH_API_URL, {
                username: register.login,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = AUTH_SITE_URL;
                } 
            }).catch(() => {
                alert("An error occurred on the server")
            })
            localStorage.setItem('token', token);
    }
    return (
        <div className="form">
            <h2>Register user:</h2>
            <form onSubmit={submitChackin}>
                <p>Login: <input 
                type="login"
                id="login"
                name="login"
                value={register.login}
                onChange={changeInputRegister}
                /></p>
                
                <p>Password: <input 
                type="password"
                id="password"
                name="password"
                value={register.password}
                onChange={changeInputRegister}
                /></p>
                
                <input type="submit"/>
            </form>
        </div>
    )
}