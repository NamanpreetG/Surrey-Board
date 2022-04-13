import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import  returnData  from "./exampledb.json";
import SpecificPost from "./SpecificPost";


function PostPage() {
  const user = JSON.parse(localStorage.getItem("user"));


  return (
    
    <>
      {returnData.map((r) => (
        <SpecificPost
        title={r.title} 
        description={r.content}
        date={r.date}
        likes={r.likes}
        tag={r.society.tag}
        username={r.user.name}
        
        />
      ))}
    </>
  );
}

export default PostPage;
