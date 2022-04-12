import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function SinglePost({ title, description, date }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date => date.toISOString().slice(0, 10);

  return (
    <>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Card.Header className="text-center">{title}</Card.Header>
          <Card.Body>
            <Row>
              <Card.Text>{description}</Card.Text>
            </Row>
            <Card.Link href="#">4 people liked this</Card.Link>
            <Card.Link href="#">Posted by {user.name}</Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SinglePost;
