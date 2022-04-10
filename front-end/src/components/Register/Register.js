import { useState } from "react";
import Axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Card } from "react-bootstrap";

function Register() {
  const [regEmail, setRegEmail] = useState();
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: regEmail,
      username: regUsername,
      password: regPassword,
    };
    const res = await Axios.post("http://localhost:3005/auth/register", user);
    console.log(res.data.message)
    if (res.data.message == 'user added') {
      localStorage.setItem("user", res.data.user.name);
      navigate("/");
    }
  };

  return (
    <Container fluid="lg">
      <br />
      <Form onSubmit={handleSubmit}>
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
            <Button type="submit" size="lg">
              Register
            </Button>
          </div>
          <br />
          <a id="align-center" href="/">
            Sign in instead?
          </a>
        </Card>
      </Form>
    </Container>
  );
}

export default Register;
