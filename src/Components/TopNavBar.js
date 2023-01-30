import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#band">Band</Nav.Link>
          <Nav.Link href="#tour">Tour</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#more">More</Nav.Link>
          <NavDropdown title="More">
            <NavDropdown.Item href="#">Mechandise</NavDropdown.Item>
            <NavDropdown.Item href="#">Extra</NavDropdown.Item>
            <NavDropdown.Item href="#">Media</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#home">Search</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavBar;
