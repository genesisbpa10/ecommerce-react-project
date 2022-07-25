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
      <Navbar className="sticky-top fs-5 text py-0" color="black" expand="md" dark>
        <NavbarBrand style={{maxHeight:"20vh"}} href="/" className="mx-3 ">
         <img src="/img/logo.png" style={{borderRadius:"100px", maxHeight:"15vh" }}/>
         
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="m-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#">FAQs</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#">Outlet</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="#">About us</NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">Contacto</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav className="mx-2">
              <DropdownToggle caret nav>
                Categorías
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Riñoneras</DropdownItem>
                <DropdownItem>Portabarbijos</DropdownItem>
                <DropdownItem>Llaveros</DropdownItem>
                <DropdownItem>Cintas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        <CartWidget />
      </Navbar>
  );
}

export default NavBar;
