import "../App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { LoginContext } from "../App";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./sidebar";

function NavBar() {
  const {state, dispatch} = useContext(LoginContext);

  return (
    <div className="App">
      {/* Navbar code */}

      <Navbar bg="light" expand="lg">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
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
                {state.user ? "Sign Out" : "Sign In"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {state.user && "Signed in as: "}
              <b>
                <a>{state.user && state.user.name}</a>
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
