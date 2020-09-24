import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item as={Link} to={'/'} className='nav-link' >Início</Nav.Item>
                    <Nav.Item as={Link} to={'/games'} className='nav-link'>Games</Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Header;
