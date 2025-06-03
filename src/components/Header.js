import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold fs-4">
          <i className="bi bi-person-circle me-2"></i>My Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" className="px-3 nav-item-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="px-3 nav-item-custom">About</Nav.Link>
            <Nav.Link href="#education" className="px-3 nav-item-custom">Education</Nav.Link>
            <Nav.Link href="#certificates" className="px-3 nav-item-custom">Certificates</Nav.Link>
            <Nav.Link href="#projects" className="px-3 nav-item-custom">Projects</Nav.Link>
            <Nav.Link href="#resume" className="px-3 nav-item-custom">Resume</Nav.Link>
            <Nav.Link href="#contact" className="px-3 nav-item-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
