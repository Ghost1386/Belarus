import React, { useState } from 'react'

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