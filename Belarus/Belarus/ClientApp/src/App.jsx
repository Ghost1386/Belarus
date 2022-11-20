import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Appeal from './pages/Appeal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import Sign from './pages/Sign';
import Admin from './pages/Admin';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import styles from './App.module.scss';
import Introduction from './pages/Introduction';
import Management from './pages/Management';
import Council from './pages/Council';


function App() {
    return (

<Router>
<div className={styles.bg}>
    <Header />
    <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/appeal" element={<Appeal />}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/introduction" element={<Introduction />}></Route>
        <Route path="/details" element={<NewsDetails />}></Route>
        <Route path="/management" element={<Management />}></Route>
        <Route path="/council" element={<Council />}></Route>
    </Routes>
    <Footer />
</div>
</Router>
       
    )
}

export default App;