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
import { useLocation, useNavigate } from "react-router-dom";
import { CardDeck } from "react-bootstrap";

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
  const post_tag = location.state.tag;

  const navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:3006/comments/${post_id}`).then((data) => {
      if (data.data.message !== "No comments found") {
        setComments(data.data);
        console.log(data.data);
      }
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

  const goToPost = () => {
    navigate("/specificPost", {
      state: {
        id: user_id,
        title: post_title,
        description: post_description,
        likes: post_likes,
        username: post_username,
        date: post_date,
        tag: post_date,
      },
      replace: true,
    });
  };
  return (
    <>
    <br></br>
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
                    <Col></Col>
                  </Row>
                </Container>
             
                <Card.Body style={{ fontSize: '15px' }} >{post_description}</Card.Body>
                <hr></hr>
                <Card.Body style={{marginLeft: "100px"}} >

                  <Row style={{ fontSize: '14px' }}>
                    <Col >
                      Posted: <b >{post_date}</b>
                    </Col>
                    <Col>
                      Liked by{" "}
                      <b>
                        {post_likes} {post_likes === 1 ? "person" : "people"}
                      </b>
                    </Col>
                    <Col>
                      Posted by <b>{post_username}</b>
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
              label="Leave a comment:"
              className="xl-5"
            >
              <Form.Control
                as="textarea"
                // placeholder="Leave a comment:"
                style={{ height: "80px" }}
                value={addComment}
                onChange={(e) => setaddComment(e.target.value)}
              />
            </FloatingLabel>

            <br></br>
            <div className="d-grid gap-2">
              <Button type="submit" variant="success" size="md">
                <strong>Post</strong>
              </Button>
              <br></br>
            </div>
          </Form>
        </>
        <Card>
          <Card.Body className="md-5">
            <Card.Title className="md-5" onClick={goToPost}>
              Comments:
            </Card.Title>
            {console.log(comments)}
            {comments &&
              comments.map((r) => (
                <Container key={r._id}>
                  <p>{r.comment}</p>
                  <Row style={{ fontSize: '14px' }} >
                    <Col>
                      Commented by: <b>{r.user.name}</b>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
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
