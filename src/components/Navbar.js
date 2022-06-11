import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../contexts/AuthContext';
import { Auth } from '../api/Auth';


const authService = new Auth();

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [auth, setAuth] = useAuth();

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);


    const handleLogout = () => {
        setAuth({
            username: '',
            role: '',
            token :''
        });

        authService.removeAuthorizationCookie();

        closeMobileMenu();
    } 

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='ticket-navbar navbar'>
                <div className='ticket-navbar-container'>
                    <Link to='/' className='ticket-navbar-logo' onClick={closeMobileMenu}>
                        fantasticket
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='ticket-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'ticket-nav-menu active' : 'ticket-nav-menu'}>
                        <li className='ticket-nav-item'>
                            <Link to='/' className='ticket-nav-links text-decoration-none' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='ticket-nav-item'>
                            <Link
                                to='/music'
                                className='ticket-nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Music
                            </Link>
                        </li>
                        <li className='ticket-nav-item'>
                            <Link
                                to='/cinema'
                                className='ticket-nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Cinema
                            </Link>
                        </li>
                        <li className='ticket-nav-item'>
                            <Link
                                to='/stage'
                                className='ticket-nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Theater
                            </Link>
                        </li>
                        <li className='ticket-nav-item'>
                            <Link
                                to='/others'
                                className='ticket-nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Others
                            </Link>
                        </li>

                        {
                            authService.getLoginToken() && <div>
                                <li>
                                    <Link
                                        to='/account'
                                        className='ticket-nav-links-mobile text-decoration-none'
                                        onClick={closeMobileMenu}
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/sign-in'
                                        className='ticket-nav-links-mobile text-decoration-none'
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </Link>
                                </li>
                            </div>
                            
                        }
                        {
                            !authService.getLoginToken() && <div>
                                <li>
                                    <Link
                                        to='/sign-up'
                                        className='ticket-nav-links-mobile text-decoration-none'
                                        onClick={closeMobileMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='/sign-in'
                                        className='ticket-nav-links-mobile text-decoration-none'
                                        onClick={closeMobileMenu}
                                    >
                                        Sign In
                                    </Link>
                                </li>
                            </div>
                        }
                    </ul>
                    {
                        (button && !authService.getLoginToken()) && <div className='d-flex flex-row'>
                            <Link to="sign-up">
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                            <span>&nbsp;&nbsp;</span>
                            <Link to="sign-in">
                                <Button buttonStyle='btn--outline'>SIGN IN</Button>
                            </Link>
                        </div>
                    }

                    {
                        (button && authService.getLoginToken()) && <div className='d-flex flex-row'>
                            <Link to="account">
                                <Button buttonStyle='btn--outline'>ACCOUNT</Button>
                            </Link>
                            <span>&nbsp;&nbsp;</span>
                            <Button buttonStyle='btn--outline' onClick={handleLogout}>LOG OUT</Button>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default Navbar;