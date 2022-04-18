import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import {
    Form,
    FormGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
    Dropdown,
    Alert
} from "react-bootstrap";

function CreateSociety() {
    const [socName, setSocName] = useState("");
    const [socTag, setSocTag] = useState("");
    const [error, setError] = useState();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(false);
        const society = {
            name: socName,
            tag: socTag,
        };
        const res = await Axios.post("http://localhost:3007/society/addsociety", society);
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
            <Form onSubmit={handleSubmit}>
                <h1 className="center-text">New Society Board</h1>
                {show && (
                    <Alert onClose={() => setShow(false)} variant="danger" dismissible>
                        <Alert.Heading>{error}</Alert.Heading>
                    </Alert>
                )}
                <Card className="card-padding">
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter society name"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setSocName(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Tags</Form.Label>
                                <div className="form-group">

                                    <textarea className="form-control" type="text" placeholder="Enter Tag" id="tags" rows="3" onChange={(e) => {
                                        e.preventDefault();
                                        setSocTag(e.target.value);
                                    }}
                                    />
                                </div>
                            </Form.Group>
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

export default CreateSociety;