import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import { Card, Col, Container, Row, Nav, Button, Form } from "react-bootstrap";
import Axios from "axios";


function FollowSociety() {
  const { state, dispatch } = useContext(LoginContext)
  const user = JSON.parse(localStorage.getItem("user"));

  const [societyList, setSocietyList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3007/").then((data) => {
        setSocietyList(data.data)
        console.log(data.data)
    });

}, []);

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
              Add
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

