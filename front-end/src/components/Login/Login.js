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
  Alert,
} from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useContext(loginContext);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    console.log(userDetails);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    const user = { email: email, password: password };
    try {
      const res = await Axios.post("http://localhost:3005/login", user);
      if (res.request.status === 200 && res.data[0]) {
        console.log(res.data[0]);
        setUserDetails(res.data[0]);
        localStorage.setItem("user", res.data);
        navigate("/homepage");
      } else {
        setError(res.data.message);
        setShow(true);
      }
    } catch (e) {
      console.log(e);
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
