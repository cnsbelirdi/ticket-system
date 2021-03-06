import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        fantasticket
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links text-decoration-none' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/music'
                                className='nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Music
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/cinema'
                                className='nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Cinema
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/stage'
                                className='nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Stage
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/others'
                                className='nav-links text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Others
                            </Link>
                        </li>

                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-in'
                                className='nav-links-mobile text-decoration-none'
                                onClick={closeMobileMenu}
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    <span>&nbsp;&nbsp;</span>
                    {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;