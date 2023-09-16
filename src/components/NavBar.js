import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyling = {
    color: "#0d6efd",
    marginLeft: "80px",
  };

  return (
  
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ fontSize: 30, alignItems: "center"}}
      >
        <Container  style={{ fontSize: 30}}>
          <Navbar.Brand as={Link} to="/" >
            <div
              className="logo-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
             
      
            
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ background: "#969390" }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navlinks">
              <Nav.Link as={Link} to="/logIn" style={navStyling}>
                LogIn
              </Nav.Link>
              <Nav.Link as={Link} to="/signUp" style={navStyling}>
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/home" style={navStyling}>
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
