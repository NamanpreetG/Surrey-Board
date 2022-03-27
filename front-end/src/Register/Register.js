import { useState } from "react";
import Axios from "axios";
import "../Register.css";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function Register() {
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
    <Container fluid="lg">
      <br />
      <Form>
        <h1 className="center-text">Register</h1>
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
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
          type="email"
          onChange={(e) => {
            setRegEmail(e.target.value);
          }}
        /> */}
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
            </Card.Body>
          </Row>
          {/* username:{" "}
        <input
          type="text"
          onChange={(e) => {
            setRegUsername(e.target.value);
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
            setRegPassword(e.target.value);
          }}
        /> */}

          <div id="align-center">
            <Button onClick={register} size="lg">
              Register
            </Button>
          </div>
          <br />
          <a id="align-center" href="/login">
            Need to sign up?
          </a>
        </Card>
      </Form>
    </Container>
  );
}

export default Register;
