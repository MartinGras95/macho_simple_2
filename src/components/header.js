import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav} from 'react-bootstrap'
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"



const Header = () => {
    return (
        <Navbar className={headerStyles.navbar} sticky="top" variant="dark" expand="lg">
            <Navbar.Brand href="/" className={headerStyles.brand}>GoGo Pizza!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>                    
                <Link to="/contact" className="nav-link">Contact</Link>                    
                <Link to="/pricing" className="nav-link">Menu</Link>                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header