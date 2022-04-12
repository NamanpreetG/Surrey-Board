import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../App";

//import React, { useEffect } from "react";
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

function SocietyBoard() {
  const { state, dispatch } = useContext(LoginContext);

  return <div>{state.user ? "Society Board, Write your enquires" : null}</div>;
}
function Posts() {
  const [postList, setPostList] = useState([]);
  const [commentsList, setComments] = useState([]);
 
  useEffect(() => {
      Axios.get("http://localhost:3007/displaypost").then((data) => {
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

