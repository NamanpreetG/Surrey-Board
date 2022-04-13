import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
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



const user_values = JSON.parse(localStorage.getItem("user"));
//console.log(user_values._id)

function CreatePost() {
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [Society, getSociety] = useState([]);
    const [postSociety, setSociety] = useState("");
    const [postEvent, setEvent] = useState(Boolean);
    const [error, setError] = useState();
    const [show, setShow] = useState(false);
    const user_id = user_values._id;
    const navigate = useNavigate();
    //const {state, dispatch} = useContext(LoginContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShow(false);
        const post = {
            title: postTitle,
            content: postContent,
            society: postSociety,
            isEvent: postEvent,
            user: user_id

        };
        const res = await Axios.post("http://localhost:3006/post", post);
        console.log(res.data.message)
        console.log(post.society)
        if (res.data.message == 'post added') {
            navigate("/homepage");
        } else {
            setError(res.data.message);
            setShow(true);
        }

    };
    useEffect(() => {
        Axios.get("http://localhost:3007/society/showall").then((data) => {
            getSociety(data.data)
            console.log(data.data)
        });

    }, []);

    return (
        
        <Container fluid="lg">
            <br />
            <Form onSubmit={handleSubmit}>
                <h1 className="center-text">New Post</h1>
                {show && (
                    <Alert onClose={() => setShow(false)} variant="danger" dismissible>
                        <Alert.Heading>{error}</Alert.Heading>
                    </Alert>
                )}
                <Card className="card-padding">
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="title"
                                    placeholder="Enter title"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setTitle(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <div className="form-group">

                                    <textarea className="form-control" type="text" placeholder="Enter description" id="description" rows="4" onChange={(e) => {
                                        e.preventDefault();
                                        setContent(e.target.value);
                                    }}
                                    />
                                </div>
                            </Form.Group>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formSociety">
                                <Form.Label>Society</Form.Label>
                                <div className="form-group">
                                    <select id='society' onChange={(e) => {
                                        e.preventDefault();
                                        setSociety(e.target.value);

                                    }}>
                                        {Society.map((value, key) => {
                                            return (

                                                <option key={key} value={value._id} >{value.name}</option>
                                            )
                                        })}
                                        <option >Select</option>
                                    </select>
                                </div>
                            </Form.Group>
                        </Card.Body>
                    </Row>
                    <Row>
                        <Card.Body>
                            <Form.Group className="mb-3" controlId="formEvent">
                                <Form.Label>Check the box below if the post is about an event:</Form.Label>
                                <div className="form-group">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setEvent(e.target.checked);

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

export default CreatePost