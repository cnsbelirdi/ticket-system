import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Music from './pages/Music';
import Cinema from './pages/Cinema';
import Stage from './pages/Stage';
import Others from './pages/Others';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import Admin from './pages/admin/Admin';
import AddEvent from './pages/admin/AddEvent';
import ShowEvent from './pages/admin/ShowEvent';
import UserEvent from "./pages/UserEvent/UserEvent";

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
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/admin/add-event' element={<AddEvent />} />
                    <Route path='/admin/show-event' element={<ShowEvent />} />
                    <Route path='/event' element={<UserEvent />} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;