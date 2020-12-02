import './nav.scss';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Nav, Container } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <Container className="p-0">
                <Nav>
                    <Nav.Item>
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/saved" className="nav-link">Saved</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        );
    }
}

export default Navigation;