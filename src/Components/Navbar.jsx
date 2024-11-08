import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "./logo21.png";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" sticky="top" className="navBar">
        <Container className="navbar-container">
          <Navbar.Brand href="/" className="custom-font-size">
            <div className="logo-heading">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Logo"
              />
              {/* <div className="Heading1"> */}
              <b>Bhagiradha Enterprises</b>
              {/* </div> */}
            </div>
          </Navbar.Brand>
          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#features">About Us</Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
