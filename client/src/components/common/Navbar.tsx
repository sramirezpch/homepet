import React from "react";

import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";

interface NavbarProps {
  children: JSX.Element;
}

export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <>
      <BootstrapNavbar collapseOnSelect bg="dark" variant="dark">
        <Container fluid>
          <BootstrapNavbar.Brand>
            <Link to="/">HomePet</Link>
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
          <BootstrapNavbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link href="/login">
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link href="/signup">
                <Link to="/signup">Register</Link>
              </Nav.Link>
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      {children}
    </>
  );
};
