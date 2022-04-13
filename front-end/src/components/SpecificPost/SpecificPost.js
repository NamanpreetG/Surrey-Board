import React, {useEffect} from "react";
import { Card, Form, FloatingLabel, Button} from "react-bootstrap";
import  returnData  from "./exampledb.json";


function SpecificPost({ title, description, date, username, likes, tag, comment }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date => date.toISOString().slice(0, 10);
console.log(returnData);
  return (
      
    <>
  <Card> 
  <Card.Body>

  <Card.Title>{title}</Card.Title>

    <Card.Text>
    {description}
    </Card.Text>
    
      <footer className="blockquote-footer mb-0">
        Posted by {username}
      </footer>
      <Card.Link href="#">{likes} people have liked this</Card.Link>
      <Card.Link href="#">Posted on {date}</Card.Link>
      <Card.Link href="#">Type of Board: {tag}</Card.Link>
      
      
  </Card.Body>
</Card>

<>
 
  <FloatingLabel controlId="floatingTextarea2" label="Leave a comment here:" className = "xl-5">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here:"
      style={{ height: '100px' }}
    />

  </FloatingLabel>
  <div className="d-grid gap-2">
  <Button variant="primary" size="md">
   Post
  </Button>
 
</div>
</>

<Card> 
  <Card.Body className = "md-5">
  <Card.Title className = "md-5">Comments:</Card.Title>

  {returnData.comment.map((r) => (
        <div> 
        key={r._id}
        date={r.date}
        name={r.name}
        content={r.content}
        </div>
      ))}

    
  </Card.Body>
</Card>


    </>
  );
}

export default SpecificPost;
