import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Appeal from './pages/Appeal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (

<Router>
<div className="App">
    <Header />
    <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/appeal" element={<Appeal />}></Route>
    </Routes>
    <Footer />
</div>
</Router>
       
    )
}

export default App;