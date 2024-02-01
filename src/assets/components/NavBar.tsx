import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Logout from "../pages/Logout";
function NavBar() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
          <Container>
            <Navbar.Brand
              href="#home"
              style={{ fontWeight: "bold", fontSize: "1.7rem" }}
            >
              Pawgnito 🐦‍⬛
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"} href="#home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"} href="#link">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/contact"} href="#link">
                  Contact
                </Nav.Link>
                <NavDropdown title="Watermarks" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#encode">Encode</NavDropdown.Item>
                  <NavDropdown.Item href="#decode">Decode</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#images">Images</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to={"/profile"} href="#profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to={"/logout"} eventKey={2} href="#logout">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
