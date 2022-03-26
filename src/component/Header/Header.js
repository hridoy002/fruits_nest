import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
                <img src={logo} alt="" /><span className='logo-name'>Fruits Nest</span>
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/">Categories</a>
                <a href="/">About Us</a>
                <a href="/">Order</a>
            </div>
        </nav>
    );
};

export default Header;