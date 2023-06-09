import { useState, useContext } from "react";
import Axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";
import { Form, Button, Container, Row, Card, Alert } from "react-bootstrap";



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const {dispatch} = useContext(LoginContext);


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    const userDetails = { email: email, password: password };
    const res = await Axios.post("http://localhost:3005/auth/login", userDetails);
    if (res.request.status === 200 && res.data.message === 'success') {
      dispatch({
        type: "LOGIN",
        payload: res.data.user
      })
      navigate("/generalBoard");
    } else {
      setError(res.data.message);
      setShow(true);
    }
  };

  return (
    <Container fluid="sm">
      <Form onSubmit={handleSubmit}>
        <br />
        <h1 className="Center">Sign In</h1>
        {show && (
          <Alert onClose={() => setShow(false)} variant="danger" dismissible>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )}
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value = {email}
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
                  value = {password}
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
