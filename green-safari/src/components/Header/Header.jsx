import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>Green Safari</h1>
            <nav>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a></li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/about'>About</a></li>
                    <li className='nav-item'>
                       <a className='nav-link' href='/contact'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
