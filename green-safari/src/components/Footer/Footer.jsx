import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Green Safari</p>
        </footer>
    );
};

export default Footer;
