import React, { useState } from "react";
import Axios from "axios";
import { Card, Col, Container, Row, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SinglePost({ title, description, date, username, likes, id, tag }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date.slice(0, 10);
  const [liked, likedPost] = useState(false);
  const [likesCount, increaseLike] = useState(likes);

  const navigate = useNavigate();

  const deletePost = async () => {
    const post = {
      post_id: id,
    };
    const res = await Axios.delete("http://localhost:3006/post/delete", {
      data: post,
    });
    if (res.data.message === "Post Deleted") {
      window.location.reload(false);
    }
  };

  const goToPost = () => {
    navigate("/specificPost", {
      state: { id, title, description, likes, username, date: formatYmd, tag },
      replace: true,
    });
  };

  async function likePost(e) {
    e.preventDefault();
    await Axios.post(`http://localhost:3006/post/addlike`, {
      post_id: id,
    });
    likedPost(!liked);
    increaseLike(likes + 1);
  }

  return (
    <>
      <Container>
        <Card className="mb-4" border="info">
          <Card.Header className="text-center">
            <Nav className="justify-end">
              <Button>{tag}</Button>
              {user.isAdmin && (
                <Button variant="danger" onClick={deletePost}>
                  Delete Post
                </Button>
              )}
            </Nav>

            <Nav className="justify-content-center">
              <Col>
                <Nav.Item style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {title}
                </Nav.Item>
              </Col>
            </Nav>

            <Nav className="justify-content">
              <Nav.Item>
                {" "}
                Posted by <strong>{username}</strong>
              </Nav.Item>
            </Nav>

            <Nav className="justify-content">
              <Nav.Item style={{ fontStyle: "italic", fontSize: "14px" }}>
                {formatYmd}
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Row>
              <Card.Text>{description}</Card.Text>
            </Row>

            <hr></hr>
            <Row>
              <Col>
                <strong>{likesCount}</strong> Likes
              </Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col>
                {!liked ? (
                  <Button
                    onClick={likePost}
                    variant="outline-success"
                    as="input"
                    type="button"
                    value=" Like " // make this conditional
                    size="sm"
                    style={{ padding: "10px 15px" }}
                  />
                ) : (
               
                )}{" "}
              </Col>
            </Row>
            <br></br>
            <Card.Footer className="text-muted, text-center">
              <Card.Link onClick={goToPost}>View Comments</Card.Link>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SinglePost;
