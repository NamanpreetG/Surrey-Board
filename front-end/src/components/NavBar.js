import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { loginContext } from "./Login/LoginProvider";

function NavBar() {
  const [message, setMessage] = useState("Bob");
  const [userDetails, setUserDetails] = useContext(loginContext);
  useEffect(() => {
    
    console.log(userDetails);
  }, []);

  const logout = () => {
    setUserDetails();
  };

  return (
    <div className="App">
      {/* Navbar code */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Surrey Board</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={logout} href="/">
                {/* TODO: dont let the user submit a blank username/password/username */}
                {userDetails.name === "" ? "Sign In" : "Sign Out"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{userDetails.name}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
