import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import { Card, Col, Container, Row, Nav, Button, Form } from "react-bootstrap";

function FollowSociety() {
  const { state, dispatch } = useContext(LoginContext)
  const user = JSON.parse(localStorage.getItem("user"));

  return (



    <Container fluid="lg">
      <br />
      <Form >
        <h1 className="center-text">Follow Society</h1>
        <Card className="card-padding">

          <Row>
            <Card.Body>
              <Form.Select aria-label="Default select example" class-Name="mb-0">
                <option>Select Society to follow</option>
                <option value="1">Football</option>
                <option value="2">Rugby</option>
                <option value="3">Computer Science</option>

              </Form.Select>
            </Card.Body>
          </Row>

          <div id="align-center">
            <Button type="submit" size="lg">
              Submit
            </Button>

          </div>
          <br />

        </Card>
      </Form>
    </Container>
  );
}

export default FollowSociety;



// society has two fields, a name and tag

