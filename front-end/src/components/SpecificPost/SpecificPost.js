import React, { useEffect } from "react";
import { Card, Form, FloatingLabel, Button } from "react-bootstrap";
import returnData from "./exampledb.json";

function SpecificPost({
  title,
  description,
  date,
  username,
  likes,
  tag,
  comment,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = (date) => date.toISOString().slice(0, 10);
  console.log(returnData);
  return (
    <>
      <Card>
        <Card.Body className="md-5">
          <Card>
            <Card.Body className="md-5">
              {returnData.post.map((r) => (
                <div
                  key={r._id}
                  title={r.title}
                  date={r.date}
                  societytag={r.tag}
                  likes={r.likes}
                  content={r.content}
                >
                  <Card.Title> {r.title} </Card.Title>
                  <p>{r.content}</p>
                  {r.likes} people have liked this
                  {r.tag}
                </div>
              ))}

              {returnData.user.map((r) => (
                <div key={r._id} date={r.date} name={r.name}>
                  Posted by: {r.name}
                  <p> Posted on: {r.date} </p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>

      <>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Leave a comment here:"
          className="xl-5"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here:"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <div className="d-grid gap-2">
          <Button variant="primary" size="md">
            Post
          </Button>
        </div>
      </>

      <Card>
        <Card.Body className="md-5">
          <Card.Title className="md-5">Comments:</Card.Title>

          {returnData.comment.map((r) => (
            <div key={r._id} date={r.date} name={r.name} content={r.content}>
              <p>{r.content}</p>
              Commented by: {r.name}
              <p> Commented on: {r.date} </p>
            </div>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}

export default SpecificPost;
