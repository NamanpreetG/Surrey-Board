import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Form,
    FormGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";


function CreatePost() {
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const navigate = useNavigate();

    //const createpost = () => {
        //Axios.post("http://localhost:3005/createpost", {
            //title: postTitle,
            //content: postText,
        //})
        const handleSubmit = async (e) => {
            e.preventDefault();
            const post = {
              title: postTitle,
              content: postContent,
              //password: regPassword,
            };
            const res = await Axios.post("http://localhost:3005/post", post);
            console.log(res.data.message)
            //if (res.data.message == 'user added') {
              //localStorage.setItem("user", res.data.user.name);
              //navigate("/");
            //}
          //};
        
            // TODO: add validation for if request comes back bad
            .then((res) => {
                navigate("/homepage");
            });
    };


    return (
        <Container fluid="lg">
            <br />
            <Form onSubmit={handleSubmit}>
                <h1 className="center-text">New Post</h1>
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
                                <div class="form-group">
                                    
                                    <textarea class="form-control" type="text" placeholder="Enter description" id="description" rows="4" onChange={(e) => {
                                        e.preventDefault();
                                        setContent(e.target.value);
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

export default CreatePost;