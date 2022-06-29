import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = () => {
    return (
        <nav style={{width: '100%'}}>
            <ul className='nav-container'>
                <li className='nav-element'><a className="active" href="#home">Home</a></li>
                <li className='nav-element'><a href="#news">Electronics</a></li>
                <li className='nav-element'><a href="#contact">Jewelery</a></li>
                <li className='nav-element'><a href="#contact">Women's clothing</a></li>
                <li className='nav-element'><a href="#about">Men's clothing</a></li>
                <CartWidget/>
            </ul>
        </nav>
    )
}

export default NavBar

