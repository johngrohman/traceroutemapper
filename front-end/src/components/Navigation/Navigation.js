import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import './Navigation.scss';

export default function Navigation() {
    return (
        <Navbar>
            <Container>
                <Nav className='Nav'>
                    <Nav.Link href="/" className='NavLink'>Home</Nav.Link>
                    <Nav.Link href="/About" className='NavLink'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}