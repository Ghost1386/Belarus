// import { useState } from "react";

// const Admin = () => {

//     const [isActive, setIsActive] = useState(false);
    

//     return (  
//         <div>
            
//       <div className="accordion">
//         <div className="accordion-item">
//           <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
//             <div>svsdvsvsdv</div>
//             <div>{isActive ? '-' : '+'}</div>
//           </div>
//           {isActive && <div className="accordion-content">
            
//           </div>}
//         </div>
//       </div>
   
//         </div>
//      );
// };

// export default Admin;

import React from 'react';
import styles from './Appeal.module.scss';
import axios from 'axios';

const APPEAL_API_URL = 'http://localhost:7001/api/appeal/post';


class Appeal extends React.Component {
    state = {
        date: '',
        title: '',
        text: '',
        images: '',
        videoUrl: '' 
        }
    
        
        componentDidMount() {
            if (this.props.user) {
            const { date, title, text, images, videoUrl } = this.props.user
                this.setState({ date, title, text, images, videoUrl });
            }
        
    }
    onFileChange = e => {
        this.setState({ images: e.target.files });
    }

    onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    }
    submitNew = async (e) => {
        const formData = new FormData();
        
        formData.append('date', this.state.data);
        formData.append('title', this.state.title);
        formData.append('text', this.state.text);
        formData.append('images', this.state.images);
        
        for (let i = 0; i < this.state.images.length; i++) {
            formData.append('formFile', this.state.images[i]);
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
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.name === '' ? '' : this.state.name} />
    
    
    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.mail === null ? '' : this.state.mail} />
    
    
    <label htmlFor="text" className={styles.form__label}>Текст</label>
    <input type="text" name="text" className={styles.form__input} onChange={this.onChange} value={this.state.theme === null ? '' : this.state.theme} />
    
    <label htmlFor="videoUrl" className={styles.form__label}>Прикрепить ссылку на видео</label>
    <input type="url" name="videoUrl" className={styles.form__input} onChange={this.onChange} value={this.state.theme === null ? '' : this.state.theme} />
    
    <label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
    <input type="file" multiple name="images" onChange={this.onFileChange} className={styles.form__inputfile}/>
    
    <button className={styles.form__button} onClick={() => {if (this.state.name === '') return alert('введите имя')}}>Отправить</button>
    </form>
    </div>;
    }
    }
    export default Appeal;