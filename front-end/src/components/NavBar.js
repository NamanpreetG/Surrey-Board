import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebar";

function NavBar() {
  const {state, dispatch} = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"))


  return (
    <div className="App">
      {/* Navbar code */}

      <Navbar bg="light" expand="lg">
        {user && (<Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />)}
        <Container>
          <Navbar.Brand href="/">Surrey Board</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => 
              dispatch({
                type: "LOGOUT"
              })} href="/">
                {/* TODO: dont let the user submit a blank username/password/username */}
                {user && "Sign Out"}
              </Nav.Link>
              {user && (<Nav.Link href="/createpost">New Post</Nav.Link>)}
              {(user && user.isAdmin) && (<Nav.Link href="/createsociety">Create Society</Nav.Link>)}
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {user && "Signed in as: "}
              <b>
                <a>{user ? user.name : null}</a>
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
