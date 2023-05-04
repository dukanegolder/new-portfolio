import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../assets/style/navigation.css";

function Navigation() {
  return (
    <div className="links">
      <Navbar variant="dark">
        <img
          src="../assets/img/C8DB84E8-2495-4AF6-8B9A-43DA8691DEAD_4_5005_c.jpeg"
          alt=""
        />
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link href="#about">About</Nav.Link>
            </Link>
            <Link to="/portfolio">
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link href="#Contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
