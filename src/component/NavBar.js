import React from "react";
import Nav from "react-bootstrap/Nav";
import Image  from "react-bootstrap/Image";
import "./NavBar.css"
import LOGO from "./images/LOGO.jpg"

const NavBar = () => {
    return (
        <Nav className="navbar" variant="pills">
            <Nav.Item>
                <Nav.Link href="/"><Image src={ LOGO } alt="logo" className="nav-logo"/></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" >Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/portfolio">Our Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar