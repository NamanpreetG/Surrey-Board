import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  FloatingLabel,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import Axios from "axios";
import { useLocation } from "react-router-dom";

function SpecificPost() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [comments, setComments] = useState([]);
  const [addComment, setaddComment] = useState();
  const user_id = user._id;
  const location = useLocation();
  const post_id = location.state.id;
  const post_title = location.state.title;
  const post_description = location.state.description;
  const post_likes = location.state.likes;
  const post_username = location.state.username;
  const post_date = location.state.date;
  const post_tag = location.state.tag
  useEffect(() => {
    Axios.get(`http://localhost:3006/comments/${post_id}`).then((data) => {
      setComments(data.data);
      console.log(data.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitComment = {
      post_id,
      user: user_id,
      comment: addComment,
    };
    const res = await Axios.post(
      "http://localhost:3006/comments/add",
      submitComment
    );
    if (res.data.message === "success") {
      console.log(res.data.message);
      window.location.reload(false);
    }
  };
  return (
    <>
      <Container>
        <Card>
          <Card.Body className="md-5">
            <Card>
              <Card.Body className="md-5">
                <Container>
                  <Row>
                    <Col>
                      <Button>{post_tag}</Button>
                    </Col>
                    <Col>
                      <Card.Title>{post_title}</Card.Title>
                    </Col>
                  </Row>
                </Container>
                <Card.Body>{post_description}</Card.Body>
                <Card.Body>
                  <Row>
                    <Col>
                      posted on <b>{post_date}</b>
                    </Col>
                    <Col>
                      Liked by{" "}
                      <b>
                        {post_likes} {post_likes === 1 ? "person" : "people"}
                      </b>
                    </Col>
                    <Col>
                      posted by <b>{post_username}</b>
                    </Col>
                  </Row>
                </Card.Body>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>

        <br></br>
        <>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Leave a comment here:"
              className="xl-5"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here:"
                style={{ height: "80px" }}
                value={addComment}
                onChange={(e) => setaddComment(e.target.value)}
              />
            </FloatingLabel>

            <br></br>
            <div className="d-grid gap-2">
              <Button type="submit" variant="primary" size="md">
                Post
              </Button>
              <br></br>
            </div>
          </Form>
        </>

        <Card>
          <Card.Body className="md-5">
            <Card.Title className="md-5">Comments:</Card.Title>

            {comments.map((r) => (
              <Container key={r._id}>
                <p>{r.comment}</p>
                <Row>
                  <Col>
                    Commented by: <b>{r.user.name}</b>
                  </Col>
                  <Col>
                    <p>
                      {" "}
                      Commented on: <b>{r.date.slice(0, 10)}</b>{" "}
                    </p>
                  </Col>
                  <Dropdown.Divider />
                </Row>
              </Container>
            ))}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SpecificPost;
