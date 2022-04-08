import "../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useEffect, useContext } from "react";
import { loginContext } from "./Login/LoginProvider";

function NavBar() {
  const [userDetails, setUserDetails] = useContext(loginContext);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUserDetails(loggedInUser);
    }
  }, []);

  const logout = () => {
    setUserDetails();
    localStorage.clear();
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
                {userDetails ? "Sign Out" : "Sign In"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {userDetails && "Signed in as: "}
              <b>
                <a>{userDetails && userDetails.name}</a>
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
