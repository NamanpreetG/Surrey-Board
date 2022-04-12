import React from "react";
import { Card, Form, FloatingLabel, Button} from "react-bootstrap";

function SpecificPost({ title, description, date }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date => date.toISOString().slice(0, 10);

  return (
      
    <>


  <Card> 
  <Card.Body>

  <Card.Title>Badminton social session should be moved to
1pm rather than 10am</Card.Title>

    <Card.Text>
    The badminton social sessions which are held every Sunday start at 10am. I think they
should be held later on in the day as some students would use Sunday morning to
relax. If it is at all possible, I think many others would like for the social session to be
moved to a later time on Sunday.
    </Card.Text>
    
      <footer className="blockquote-footer mb-0">
        Posted by {user.name}
      </footer>
      <Card.Link href="#">4 people have liked this</Card.Link>
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

    <Card.Text>
    I really enjoyed this, it was so worth my time and I loved it so much. 
    </Card.Text>
    <footer className="blockquote-footer mb-5">
        Commented by {user.name}
      </footer>
  
    <Card.Text>
    I really enjoyed this, it was so worth my time and I loved it so much. 
    </Card.Text>
    <footer className="blockquote-footer mb-5">
        Commented by {user.name}
      </footer>

    <Card.Text>
    I really enjoyed this, it was so worth my time and I loved it so much. 
    </Card.Text>
    <footer className="blockquote-footer mb-5">
        Commented by {user.name}
      </footer>

    <Card.Text>
    I really enjoyed this, it was so worth my time and I loved it so much. 
    </Card.Text>
    <footer className="blockquote-footer mb-5">
        Commented by {user.name}
      </footer>

    <Card.Text>
    I really enjoyed this, it was so worth my time and I loved it so much. 
    </Card.Text>
    <footer className="blockquote-footer mb-5">
        Commented by {user.name}
      </footer>
    
    
  </Card.Body>
</Card>












    </>
  );
}

export default SpecificPost;
