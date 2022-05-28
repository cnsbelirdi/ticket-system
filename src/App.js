import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Music from './components/pages/Music';
import Cinema from './components/pages/Cinema';
import Stage from './components/pages/Stage';
import Others from './components/pages/Others';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/music' element={<Music />} />
                    <Route path='/cinema' element={<Cinema />} />
                    <Route path='/stage' element={<Stage />} />
                    <Route path='/others' element={<Others />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;