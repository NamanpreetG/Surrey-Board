import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";
import SinglePost from "../Posts/SinglePost";
import { returnData } from "./example";

function GeneralBoard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      {returnData.map((r) => (
        <SinglePost 
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

export default GeneralBoard;
