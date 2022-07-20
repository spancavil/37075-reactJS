import React from 'react';
import CartWidget from '../CartWidget';
import './styles.css';
import { Link } from 'react-router-dom';

const NavBar = () => {


    return (
        <nav style={{ width: '100%' }}>
            <ul className='nav-container'>
                <li className='nav-element'><Link to='/'>Home</Link></li>
                <li className='nav-element'><Link to='/category/electronics'>Electronics</Link></li>
                <li className='nav-element'><Link to='/category/jewelery'>Jewelery</Link></li>
                <li className='nav-element'><Link to="/category/women's clothing">Women's clothing</Link></li>
                <li className='nav-element'><Link to="/category/men's clothing">Men's clothing</Link></li>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar

