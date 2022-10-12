import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar  bg="light" expand="lg">
            <Container>
                <Navbar.Brand id='title' href="/home">QUIZ CONTEST </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='link-id' className="me-auto ">
                        <Link className='text-primary' to="/home">Home</Link>
                        <Link className='text-primary' to="/topics">Topics</Link>
                        <Link className='text-primary' to="/statistics">Statistics</Link>
                        <Link className='text-primary' to="/blogs">Blog</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;