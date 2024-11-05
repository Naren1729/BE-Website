import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./logo1.png";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <Navbar data-bs-theme="light" sticky="top" className="navBar">
        <Container>
          <Navbar.Brand href="#home" className="custom-font-size">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
            Bhagiradha Enterprises
          </Navbar.Brand>
          <Nav className="ml-auto ">
            {" "}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Products</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
