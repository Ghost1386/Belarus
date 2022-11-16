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


function App() {
    return (

<Router>
<div className="App">
    <Header />
    <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/appeal" element={<Appeal />}></Route>
        <Route path="/news" element={<News/>}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
    </Routes>
    <Footer />
</div>
</Router>
       
    )
}

export default App;