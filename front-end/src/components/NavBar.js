import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

function NavBar() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((returnData) => setMessage(returnData));
  }, []);
  return (
    <div className="App">
      {/* Navbar code */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Surrey Board</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Sign In</Nav.Link>
              <Nav.Link href="#link">Your Boards</Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Action 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{message.message}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
