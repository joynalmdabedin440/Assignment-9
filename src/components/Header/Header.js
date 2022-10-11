import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='' bg="light" expand="lg">
            <Container>
                <Navbar.Brand id='title' href="/home">QUIZ CONTEST </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link className='text-primary' href="/home">Home</Nav.Link>
                        <Nav.Link className='text-primary' href="/topics">Topics</Nav.Link>
                        <Nav.Link className='text-primary' href="/statistics">Statistics</Nav.Link>
                        <Nav.Link className='text-primary' href="/blog">Blog</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;