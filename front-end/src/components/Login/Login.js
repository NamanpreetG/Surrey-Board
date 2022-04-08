import { useState, useContext } from "react";
import Axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { loginContext } from "./LoginProvider";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useContext(loginContext);
  const navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3005/auth/login", {
      email: email,
      password: password,
    })
      // TODO: add validation for if request comes back bad
      .then((res) => {
        if (res.data.message) {
          setLoginStatus(res.data.message);
        } else {
          setLoginStatus(res.data[0].name);
          navigate("/homepage");
        }
      });
  };

  return (
    <Container fluid="sm">
      <Form>
        <br />
        <h1 className="Center">Sign In</h1>
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>

          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>

          <div id="center-button">
            <Button variant="success" onClick={login} size="lg">
              Log In
            </Button>
          </div>

          <h3 style={{ color: "red" }}>{loginStatus} </h3>
          <br />
          <a id="center-button" href="/register">
            Need to register?
          </a>
        </Card>
      </Form>
    </Container>
  );
}

export default Login;
