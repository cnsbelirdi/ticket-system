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
                        <li className='nav-item dropdown'>
                            <button
                                className='nav-links-dropdown text-decoration-none dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton'
                                data-toggle='dropdown'
                                onClick={closeMobileMenu}
                            >
                                Stage
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link
                                    to='/theater'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Theater
                                </Link>
                                <Link
                                    to='/stand-up'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Stand-Up
                                </Link>
                                <Link
                                    to='/dance'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Dance
                                </Link>
                            </div>
                        </li>
                        <li className='nav-item dropdown'>
                            <button
                                className='nav-links-dropdown text-decoration-none dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton'
                                data-toggle='dropdown'
                                onClick={closeMobileMenu}
                            >
                                Others
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link
                                    to='/sport'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Sport
                                </Link>
                                <Link
                                    to='/exhibition'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Exhibition
                                </Link>
                                <Link
                                    to='/circus'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Circus
                                </Link>
                                <Link
                                    to='/workshop'
                                    className='text-decoration-none dropdown-item'
                                    onClick={closeMobileMenu}
                                >
                                    Workshop
                                </Link>
                            </div>
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