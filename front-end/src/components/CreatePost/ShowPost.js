// JavaScript source code
import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import {
    Form,
    FormGroup,
    Button,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap";


function Posts() {
    const [postList, setPostList] = useState([]);
    const [commentsList, setComments] = useState([]);
   
    useEffect(() => {
        Axios.get("http://localhost:3005/showpost").then((data) => {
            setPostList(data.data)
            console.log(data.data)
        });

    }, []);

    return (
        <Container fluid="lg">
            <div className="center-text">
                {postList.map((val, key) => {
                    return (
                        <div key={key}>
                            <h1 className="center-text">{val.title}</h1>
                            <p className="center-text">{val.content}</p>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default Posts;