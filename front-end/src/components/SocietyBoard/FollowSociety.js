import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import { Card, Col, Container, Row, Nav, Button, Form, Alert } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const user_values = JSON.parse(localStorage.getItem("user"));
function FollowSociety() {
  const { state, dispatch } = useContext(LoginContext);
  const [show, setShow] = useState(false);
  const [postSociety, setSociety] = useState("");
  const [societyList, setSocietyList] = useState([]);
  const user_id = user_values._id;
  const navigate = useNavigate();
  const [error, setError] = useState();


  useEffect(async () => {
    await Axios.get("http://localhost:3007/society/showall").then((data) => {
      setSocietyList(data.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    const followSociety = {
      society_id: postSociety,
      user_id: user_id,
    };
    const res = await Axios.post(
      "http://localhost:3007/society/follow",
      followSociety
    );
    if (res.data.message == "success") {
     //console.log(res.data.message);
      navigate("/generalBoard");
      window.location.reload();
    } else {
     //console.log(res.data.message);
      setError(res.data.message);
      setShow(true);
    }
  };

  return (
    <Container fluid="lg">
      <br />
      <Form onSubmit={handleSubmit}>
        <h1 className="center-text">Follow Society</h1>
        {show && (
          <Alert onClose={() => setShow(false)} variant= "danger" dismissible>
            <Alert.Heading>{error}</Alert.Heading>
          </Alert>
        )}
        <Card className="card-padding">
          <Row>
            <Card.Body>
              <Form.Select
                aria-label="Default select example"
                className="mb-0"
                onChange={(e) => {
                  e.preventDefault();
                  setSociety(e.target.value);
                }}
              >
                <option>Select Society to follow</option>
                {societyList.map((value, key) => {
                  return (
                    <option key={value._id} value={value._id}>
                      {value.name}
                    </option>
                  );
                })}
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
