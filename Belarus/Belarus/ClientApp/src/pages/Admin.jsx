import React from 'react';
import styles from './Admin.module.scss';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';

const ADMIN_API_URL = 'http://localhost:7001/api/admin/';

class Admin extends React.Component {
    state = {
        date: new Date(),
        title: '',
        mainText: '',
        text: '',
        photos: [],
        videoUrl: '',
        type: '' 
        }
    
        componentDidMount() {
            if (this.props.user) {
            const { date, title, mainText, text, photos, videoUrl, type } = this.props.user
                this.setState({ date, title, mainText, text, photos, videoUrl, type });
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
        
        
        if (this.state.videoUrl !== '') {
            formData.append('videoUrl', this.state.videoUrl)
        }
        else {
            formData.append('videoUrl', "0")
        }

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


    delete = async () => {
      const formData = new FormData();

      formData.append('date', this.state.date);
      formData.append('title', this.state.title);
      formData.append('type', this.state.type);
     

      try {
          const res = await axios.post(ADMIN_API_URL + 'delete', formData);
          console.log(res);
      } catch (ex) {
          console.log(ex);
      }
      
  }

    submitGal = async () => {
      const formData = new FormData();

        formData.append('date', this.state.date);
        formData.append('title', this.state.title);
        
        
        
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append('photos', this.state.photos[i]);
        }

        try {
            const res = await axios.post(ADMIN_API_URL + 'galleryCreate', formData);
            console.log(res);
        } catch (ex) {
            console.log(ex);
        }
      
  }

  submitCont = async () => {
    const formData = new FormData();

    formData.append('date', this.state.date);
    formData.append('title', this.state.title);
    formData.append('mainText', this.state.mainText); 
    formData.append('text', this.state.text);     
    
    for (let i = 0; i < this.state.photos.length; i++) {
        formData.append('photos', this.state.photos[i]);
    }

    try {
        const res = await axios.post(ADMIN_API_URL + 'contestCreate', formData);
        console.log(res);
    } catch (ex) {
        console.log(ex);
    }
    
}


submitAdv = async () => {
  const formData = new FormData();

  formData.append('date', this.state.date);
  formData.append('title', this.state.title);
  formData.append('mainText', this.state.mainText);
  formData.append('text', this.state.text);     
  
  for (let i = 0; i < this.state.photos.length; i++) {
      formData.append('photos', this.state.photos[i]);
  }

  try {
      const res = await axios.post(ADMIN_API_URL + 'previewCreate', formData);
      console.log(res);
  } catch (ex) {
      console.log(ex);
  }
  
}

    render() {
    return  <div className={styles.container}>
    
    
    
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Добавить новость</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitNew} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />


    <label htmlFor="text" className={styles.form__label}>Текст</label>
    <textarea rows="10" cols="45" name="text" className={styles.form__inputtext} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text}></textarea>
    

    <label htmlFor="videoUrl" className={styles.form__label}>Прикрепить ссылку на видео</label>
    <input type="url" name="videoUrl" className={styles.form__input} onChange={this.onChange} value={this.state.videoUrl === null ? '' : this.state.videoUrl} />

<label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
<input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Удалить новость</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.deleteNew} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />

    <label htmlFor="title" className={styles.form__label}>Тип</label>
    <input type="text" name="type" className={styles.form__input} onChange={this.onChange} value={this.state.type === null ? '' : this.state.type} />

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>Добавить фото</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitGal} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />


    <label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
    <input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>Удалить фото</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.delete} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />

    <label htmlFor="title" className={styles.form__label}>Тип</label>
    <input type="text" name="type" className={styles.form__input} onChange={this.onChange} value={this.state.type === null ? '' : this.state.type} />

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>Добавить конкурс</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitCont} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />

    <label htmlFor="mainText" className={styles.form__label}>Заглавный текст</label>
    <input type="text" name="mainText" className={styles.form__input} onChange={this.onChange} value={this.state.mainText === null ? '' : this.state.mainText} />

    <label htmlFor="text" className={styles.form__label}>Текст</label>
    <textarea rows="10" cols="45" name="text" className={styles.form__inputtext} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text}></textarea>

<label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
<input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>Удалить конкурс</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.delete} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />

    <label htmlFor="title" className={styles.form__label}>Тип</label>
    <input type="text" name="type" className={styles.form__input} onChange={this.onChange} value={this.state.type === null ? '' : this.state.type} />

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="6">
      <Accordion.Header>Добавить анонс</Accordion.Header>
      <Accordion.Body>
      <form onSubmit={this.submitAdv} className={styles.form}>
    
    <label htmlFor="date" className={styles.form__label}>Дата</label>
    <input type="date" name="date" className={styles.form__input} onChange={this.onChange} value={this.state.date === null ? '' : this.state.date} />


    <label htmlFor="title" className={styles.form__label}>Заголовок</label>
    <input type="text" name="title" className={styles.form__input} onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />


    <label htmlFor="mainText" className={styles.form__label}> Заглавный текст</label>
    <input type="text" name="mainText" className={styles.form__input} onChange={this.onChange} value={this.state.mainText === null ? '' : this.state.mainText} />

    <label htmlFor="text" className={styles.form__label}>Текст</label>
    <textarea rows="10" cols="45" name="text" className={styles.form__inputtext} onChange={this.onChange} value={this.state.text === null ? '' : this.state.text}></textarea>

    

<label htmlFor="file" className={styles.form__label}>Прикрепить фотографии</label>
<input type="file" multiple name="photos" onChange={this.onFileChange} className={styles.form__inputfile}/>

    <input type="submit" />
</form>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </div>;
    }
    }
    export default Admin;