import { useState, useContext, useEffect } from "react";
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
  const [error, setError] = useState("");
  const [user, setUser] = useContext(loginContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };

    try {
      const res = await Axios.post("http://localhost:3005/login", user);
      console.log(res);
      if (res.status === 200) {
        if (res.data[0]) {
          setUser(res.data);
          localStorage.setItem("user", res.data);
          console.log(res.data);
          navigate("/homepage");
        } else {
          setError("Username or password is incorrect");
        }
      }
    } catch (err) {
      console.error(err);
    }

    // TODO: add validation for if request comes back bad
  };

  return (
    <Container fluid="sm">
      <Form onSubmit={handleSubmit}>
        <br />
        <h1 className="Center">Sign In</h1>
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
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
                  value={password}
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>

          <div id="center-button">
            <Button type="submit" variant="success" size="lg">
              Log In
            </Button>
          </div>

          <h3 style={{ color: "red" }}>{error}</h3>
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
