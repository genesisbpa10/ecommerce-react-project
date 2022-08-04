import React from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";


function NavBar() {
  return (
   <>
     <Navbar
      className="sticky-top "
      style={{ height: "14vh", display: "flex" }}
      color="dark"
      expand="md"
      dark="true"
      >
        <Container >
      <Navbar.Brand as={Link} to="/" className="mx-2">
        <img style={{ maxHeight: "9vh" }} src="/img/favicon.ico" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={function noRefCheck() {}} />
      <Navbar.Collapse>
        <Nav className="mx-auto" navbar>
            <Nav.Link className="mx-2" as={Link} to="/">Home</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/contacto"> Contacto</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/faqs">FAQs</Nav.Link>
            <Nav.Link className="mx-2" as={Link} to="/about">About us</Nav.Link>
          <NavDropdown className="mx-2" title="Categorías">
              <NavDropdown.Item as={Link} to="/category/riñoneras">
                Riñoneras
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/cintas">
                Cintas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/portabarbijos">
                Portabarbijos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/llaveros">
                Llaveros
              </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
        </Container>
    </Navbar>
      </> 
  );
}
  
  
  export default NavBar;
  