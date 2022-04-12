import React from "react";
import { Card, Col, Container, Row, Nav, Button } from "react-bootstrap";
import { createBootstrapComponent } from "react-bootstrap/esm/ThemeProvider";

function SinglePost({ title, description, date, username, likes }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formatYmd = date.slice(0, 10);

  

  


  
  return (
    <>
      <Container>



        <Card
        className="mb-4"
        border="info"
        >
          <Card.Header className="text-center"  >
          <Nav className="justify-content-center">
          <Nav.Item>
          {title}
          </Nav.Item>
          </Nav>

          <Nav className="justify-content-end">
          <Nav.Item>
          Posted on  {formatYmd}
          </Nav.Item>
          </Nav>
          </Card.Header>
          <Card.Body>
            <Row>
              <Card.Text>{description}</Card.Text>
            </Row>
            
            <Card.Link  href="#" >{likes} Likes</Card.Link>
           
            <Card.Link href="#"  >Posted by {username}</Card.Link>
            <Row>
            <div className="mb 1">

            <Button as="input" type="button" value="Like" size="sm" />{' '}
            
           

            </div>
            </Row>
            
          <Card.Footer  className="text-muted, text-center" >
             <Card.Link href="#"> View Comments</Card.Link>
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
