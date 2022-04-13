import React from "react";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../App";
<<<<<<< HEAD


import { useState } from "react";
=======
>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
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
<<<<<<< HEAD
  const { state, dispatch } = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"));

 
=======
  const {state, dispatch} = useContext(LoginContext);

  return (

    
    <div>
      <div className="bg-reddit_dark px-6 py-4 text-gray-400"></div>   
      <div className ="border border-reddit_border p-2 rounded-md flex bg-reddit_dark-brighter">
        <div className="rounded-full bg-gray-500 overflow-hidden w-10 h-10">
        </div>
        <div className="pt2 pl-4 text-align: Center"> 
          <h1 className="text-gray" text-3xl>Society Board</h1> 
        </div>

       <div className="bg-reddit_dark px-6 py-4"></div>
       <div className="border border-reddit_border p-2 rounded-md"></div>
          <div className="rounded-full bg-gray-500 overflow-hidden w-10 h-10 flex"></div>
        <form action="" className="flex-grow bg-reddit_dark-brightest border border-reddit_border ml-4 mr-2 rounded-md">
          <input type="text" className="bg-reddit_dark-brightest p-2 px-3 text-sm block w-full rounded-md ml-4" placeholder="New Post.." ></input>
          
        </form>
<div className="px-6 bg-reddit_dark text-gray-300"></div> 
<div className="border border-reddit_border bg-reddit_dark-brighter p-2">
  <div className="text-align: left">
 <h2 className="mb-2">An example of an Education Board</h2></div>
 <div className=""><h6 className="text-sm mb-5"> Posted by "Mark Twain", 5 hours ago.</h6></div>
 <div className="rounded-full bg-gray-500 overflow-hidden w-10 h-10 flex"></div>
 <div className="text-l leading-6 "><p>Hi all,

As well as inflation and shrinkflation, has anyone noticed the quality reduction in products (cheapening of ingredients)? What are some examples you have seen?

For me I have seen a greater reduction in quality of ice creams where actual dairy has been replaced by fillers and sugar.

Same applies for chocolate, where you see chocolate now being labelled as chocolately or chocolate-flavored which is not quite the same.

What are some examples you've noticed? </p></div>
</div>


      </div>
    </div>);
>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
}
function Posts() {
  const [postList, setPostList] = useState([]);
  const [commentsList, setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
 
  useEffect(() => {
      Axios.get("http://localhost:3007/society/showall").then((data) => {
          setPostList(data.data)
          console.log(data.data)
      });

  }, []);

  return (
      <Container fluid="lg">
          {user ? "society Board, Write your enquires " : null}
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

