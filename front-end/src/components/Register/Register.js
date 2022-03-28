import { useState } from "react";
import Axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const register = () => {
    Axios.post("http://localhost:3005/register", {
      email: regEmail,
      username: regUsername,
      password: regPassword,
    })
      // TODO: add validation for if request comes back bad
      .then((res) => {
        navigate("/login");
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
                    e.preventDefault();
                    setRegEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>

          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    e.preventDefault();
                    setRegUsername(e.target.value);
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
                    e.preventDefault();
                    setRegPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>

          <div id="align-center">
            <Button onClick={register} size="lg">
              Register
            </Button>
          </div>
          <br />
          <a id="align-center" href="/login">
            Sign in instead?
          </a>
        </Card>
      </Form>
    </Container>
  );
}

export default Register;
