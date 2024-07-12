import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar className='Nav'>
            <Link to={'/'} className='NavLink'>Home</Link>
            <Link to={'About'} className='NavLink'>About</Link>
        </Navbar>
    );
}