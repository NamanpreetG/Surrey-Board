import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import { Card, Col, Container, Row, Nav, Button, Form } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user_values = JSON.parse(localStorage.getItem("user"));
function FollowSociety() {
  const { state, dispatch } = useContext(LoginContext)
  const user = JSON.parse(localStorage.getItem("user"));
  const [show, setShow] = useState(false);
  const [postSociety, setSociety] = useState("");
  const [societyList, setSocietyList] = useState([]);
  const user_id = user_values._id;
  const navigate = useNavigate();
  const [error, setError] = useState();

 useEffect(() => {
  Axios.get("http://localhost:3007/society/showall").then((data) => {
      setSocietyList(data.data)
      console.log(data.data)
      console.log(user_values)
  });

}, []);

const handleSubmit = async (e) => {
  e.preventDefault();
  setShow(false);
  const followSociety = {
      society_id: postSociety,
      user_id: user_id

  };
  const res = await Axios.post("http://localhost:3007/society/follow", followSociety);
  console.log(res.data.message)
  console.log(followSociety)
  if (res.data.message == 'success') {
      navigate("/generalBoard");
  } else {
      setError(res.data.message);
      setShow(true);
  }

};

  return (

    <Container fluid="lg">
      <br />
      <Form onSubmit={handleSubmit} >
        <h1 className="center-text">Follow Society</h1>
        <Card className="card-padding">

          <Row>
            <Card.Body>
              <Form.Select aria-label="Default select example" className="mb-0">
                <option>Select Society to follow</option>
                <option value="1">Football</option>
                <option value="2">Rugby</option>
                <option value="3">Computer Science</option>

              </Form.Select>
            </Card.Body>
          </Row>

          <div id="align-center">
            <Button onClick={setSociety()}  type="submit" size="lg">
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

