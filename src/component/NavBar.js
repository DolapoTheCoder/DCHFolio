import React from "react";
import "./NavBar.css"
import LOGO from "./images/LOGO.jpg"
import { useLocation } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
    const location = useLocation();
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={ LOGO } alt="logo" className="nav-logo"/>{' '}
                        DeCentralHub
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/portfolio">Our Portfolio</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar