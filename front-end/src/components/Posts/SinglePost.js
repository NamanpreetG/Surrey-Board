import React, { useState } from "react";
import Axios from "axios";
import { Card, Col, Container, Row, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SinglePost({ title, description, date, username, likes, id, tag }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date.slice(0, 10);

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

  const [liked, likedPost] = useState(false)
  const [likesCount, increaseLike] = useState(likes);

  async function likePost(e) {
    e.preventDefault()
    const res = await Axios.post(`http://localhost:3006/post/addlike`, { post_id: id });
    likedPost(true)
    increaseLike(likes + 1)

  }

  return (
    <>
      <Container>
        <Card className="mb-4" border="info">
          <Card.Header className="text-center">
            <Nav className="justify-content-center">
              {user.isAdmin && (
                <Button variant="danger" onClick={deletePost}>
                  Delete Post
                </Button>
              )}
              <Row>
                <Col>
                  <Nav.Item >{title}</Nav.Item>
                </Col>
                <Col>
                  <Button >{tag}</Button>
                </Col>
              </Row>
            </Nav>

            <Nav className="justify-content">
              <Nav.Item> Posted by <strong>{username}</strong></Nav.Item>
            </Nav>

            <Nav className="justify-content">
              <Nav.Item style={{ fontSize: '14px' }}>{formatYmd}</Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>

            <Row>
              <Card.Text>{description}</Card.Text>
            </Row>

            <hr></hr>
            <Row>
              <Col>

                <a><strong>{likesCount}</strong> Likes</a>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
              </Col>
              <Col>
                {!liked ? <Button
                  onClick={likePost}
                  variant="danger"
                  as="input"
                  type="button"
                  value="Like  "// make this conditional
                  size="sm"
                  style={{ padding: '10px 15px' }}
                /> :
                  <Button
                    variant="danger"
                    as="input"
                    type="button"
                    value="Liked"// make this conditional
                    size="sm"
                    style={{ padding: '10px 15px' }}
                  />}{" "}

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
