import React from "react";
import Axios from "axios";
import { Card, Col, Container, Row, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SinglePost({ title, description, date, username, likes, id }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date.slice(0, 10);

  const navigate = useNavigate();

  const deletePost = async () => {
    console.log(id);
    const post = {
      post_id: id,
    };
    const res = await Axios.delete("http://localhost:3006/post/delete", {
      data: post,
    });
    if (res.data.message === "Post Deleted") {
      console.log("deleted");
      window.location.reload(false);
    }
  };

  const sty = {
    position: 'absolute',
    top:'2%',
    right: '0',
    width: '120px',
    transform: 'translateX(-970%)'
  }

  return (
    <>
      <Container>
        <Card className="mb-4" border="info">
          <Card.Header className="text-center">
            <Nav className="justify-content-center">
              {user.isAdmin && (
                <Button style={ sty }variant="danger" onClick={deletePost}>
                  Delete Post
                </Button>
              )}
              <Nav.Item>{title}</Nav.Item>
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
              <Card.Link href="/SpecificPost"> View Comments</Card.Link>
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
