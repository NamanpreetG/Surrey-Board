import React from "react";
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
              <Nav.Item >{title}</Nav.Item>
              <Button>{tag}</Button>
            </Nav>

            <Nav className="justify-content-end">
              <Nav.Item>Posted on {formatYmd}</Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Row>
              <Card.Text>{description}</Card.Text>
            </Row>

            <Card.Link href="#">{likes} Likes</Card.Link>

            <Card.Link href="#">Posted by {username}</Card.Link>
            <Row>
              <div className="mb 1">
                <Button
                  variant="danger"
                  as="input"
                  type="button"
                  value="Like"
                  size="sm"
                />{" "}
              </div>
            </Row>

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

// date
// number of likes
// tags
// format
// user name
