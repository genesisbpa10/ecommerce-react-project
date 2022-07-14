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
  DropdownItem
} from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar color="dark" expand="md" dark>
        <NavbarBrand href="/" className="mx-2">
          TZURE BAGS
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="mx-2">
              <NavLink href="#">Home</NavLink>
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
                <DropdownItem />
                <DropdownItem>Cintas</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
