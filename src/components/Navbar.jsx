import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavbarHeader from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <NavbarHeader expand="lg" bg="danger" variant="dark">
                <Container  >
                    <NavbarHeader.Toggle aria-controls="navbarScroll" />
                    <NavbarHeader.Collapse id="navbarScroll">
                        <Nav className="me-auto" >
                            <Link to="/" className=" text-decoration-none">
                                <NavbarHeader.Brand  ><span>🏠</span> Home </NavbarHeader.Brand>
                            </Link>
                            <Link to="/contact" className="text-decoration-none">
                                <NavbarHeader.Brand  ><span>📒</span> Contacto </NavbarHeader.Brand>
                            </Link>
                        </Nav>
                        <Nav>
                            <NavbarHeader.Brand className="d-flex"> Happy Cake <span className="ps-2">🍰</span></NavbarHeader.Brand>
                        </Nav>
                    </NavbarHeader.Collapse>
                </Container>
            </NavbarHeader>
        </>
    )
}

export default Navbar 