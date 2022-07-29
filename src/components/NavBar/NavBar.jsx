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
      <Navbar className="sticky-top " style={{ height: "14vh", display:"flex" }} color="dark" expand="md" dark>
        <NavbarBrand href="/" className="mx-2">
          <img  style={{maxHeight:"9vh"}} src="/img/favicon.ico" alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="mx-auto" navbar>
            <NavItem className="mx-2">
              <NavLink  href="/">Home</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contacto">Contacto</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contacto">FAQs</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/contacto">Us</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav className="mx-2">
              <DropdownToggle caret nav>
                Categorías
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href="/category/riñoneras">Riñoneras</DropdownItem>
                <DropdownItem href="/category/:portabarbijos">Portabarbijos</DropdownItem>
                <DropdownItem href="/category/:cintas" >Cintas</DropdownItem>
                <DropdownItem href="/category/:llaveros" >Llaveros</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <CartWidget />
      </Navbar>
  );
}

export default NavBar;
