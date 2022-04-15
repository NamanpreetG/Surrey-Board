import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  Alert,
} from "react-bootstrap";
const user_values = JSON.parse(localStorage.getItem("user"));

function CreatePost() {
  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");
  const [societies, setSocieties] = useState([]);
  const [postSociety, setPostSociety] = useState("");
  const [postEvent, setEvent] = useState(Boolean);
  const [error, setError] = useState();
  const [show, setShow] = useState(false);
  const user_id = user_values._id;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (postTitle === "" || postContent === "") {
      setError("Title or description must not be left blank");
      setShow(true);
    } else {
      setShow(false);
    }
    const post = {
      title: postTitle,
      content: postContent,
      society: postSociety,
      isEvent: postEvent,
      user: user_id,
    };
    const res = await Axios.post("http://localhost:3006/post", post);
    if (res.data.message === "post added") {
      navigate("/generalBoard");
    } else {
      setError(res.data.message);
      setShow(true);
    }
  };
  useEffect(() => {
    Axios.post("http://localhost:3007/society/mysocieties", {
      user_id,
    }).then((response) => {
      setSocieties(response.data.result[0].society);
      setPostSociety(response.data.result[0].society[0]._id);
    });
  }, []);

  return (
    <Container fluid="lg">
      <br />
      <Form onSubmit={handleSubmit}>
        <h1 className="center-text">New Post</h1>
        {show && (
          <Alert onClose={() => setShow(false)} variant="danger" dismissible>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )}
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="title"
                  placeholder="Enter title"
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
            </Card.Body>
          </Row>
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="text"
                    placeholder="Enter description"
                    id="description"
                    rows="4"
                    onChange={(e) => {
                      e.preventDefault();
                      setContent(e.target.value);
                    }}
                  />
                </div>
              </Form.Group>
            </Card.Body>
          </Row>
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formSociety">
                <Form.Label>Society</Form.Label>
                <div className="form-group">
                  <Form.Select
                    id="society"
                    value={postSociety}
                    onChange={(e) => {
                      e.preventDefault();
                      setPostSociety(e.target.value);
                    }}
                  >
                    {societies.map((r) => (
                      <option key={r._id} value={r._id}>
                        {r.name}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>
            </Card.Body>
          </Row>
          <Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formEvent">
                <Form.Label>Is this an event?</Form.Label>
                <div className="form-group">
                  <Form.Check
                    type="checkbox"
                    onChange={(e) => {
                      setEvent(e.target.checked);
                    }}
                  />
                </div>
              </Form.Group>
            </Card.Body>
          </Row>
          <div id="align-center">
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
          <br />
        </Card>
      </Form>
    </Container>
  );
}

export default CreatePost;
