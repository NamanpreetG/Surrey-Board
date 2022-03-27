import { useState } from "react";
import Axios from "axios";
import "../Login.css";
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
  const [regEmail, setRegEmail] = useState();
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3005/register", {
      email: regEmail,
      username: regUsername,
      password: regPassword,
    }).then((res) => {
      console.log(res);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3005/login", {
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.message) {
        console.log(res.data);
        setLoginStatus(res.data.message);
      } else {
        console.log(res.data);
        setLoginStatus(res.data[0].name);
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
                    setRegEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>
          {/* email:{" "}
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        /> */}
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Card.Body>
          </Row>
          {/* password:{" "}
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /> */}

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
