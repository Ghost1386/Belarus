import React from 'react';
import { useState } from 'react';
import axios from 'axios';


function Appeal() {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');

    const handleNameChange = (value) => {
        setName(value);
    };
    const handleMailChange = (value) => {
        setMail(value);
    };
    

    const handleSave = () => {
        const data = {
          Name : name,
          Email : mail  
        };
const url ="http://localhost:7001/api/appeal/post";
axios.post(url, data).then((result) =>{
    alert(result.data);
}).catch((error)=>{
    alert(error);
})

    }
    
    return (
        <div>
            <form >
    
    <label >ФИО</label>
    <input type="text" onChange={(e)=> handleNameChange(e.target.value)}/>
    
    
    <label >Адрес элетронной почты (e-mail)</label>
    <input type="text"  onChange={(e)=> handleMailChange(e.target.value)}/>
    
    
    <button onClick={()=> handleSave()}>Подробнее</button>
    </form>
        </div>
    )
}
    export default Appeal;

    


