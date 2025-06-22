import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo2.png";
import "./Navbar.css";

function NavBar({ loggedIn, onLogout }) {
  return (
    <Navbar expand="lg" sticky="top" className="navBar">
      <Container fluid className="navbar-container">
        {/* Logo and Heading */}
        <Navbar.Brand href="/" className="custom-font-size">
          <div className="logo-heading">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <b>Bhagiradha Enterprises</b>
          </div>
        </Navbar.Brand>
        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav Links aligned to the extreme right */}
          <Nav className="navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            {loggedIn ? (
              <Nav.Link onClick={onLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
