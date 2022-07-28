import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CartWidget from "./CartWidget";


function NavBar() {

  return (
      <Navbar style={{ height: "10vh" }} color="dark" expand="md" dark>
        <NavbarBrand href="/" className="mx-2">
          <img  style={{maxHeight:"9vh"}} src="/img/favicon.ico" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="mx-2">
              <NavLink  href="/">Home</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contacto">Contacto</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav className="mx-2">
              <DropdownToggle caret nav>
                Categorías
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/category/:id">Riñoneras</DropdownItem>
                <DropdownItem href="/category/:id">Portabarbijos</DropdownItem>
                <DropdownItem href="/category/:id" >Cintas</DropdownItem>
                <DropdownItem href="/category/:id" >Llaveros</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <CartWidget />
      </Navbar>
  );
}

export default NavBar;
