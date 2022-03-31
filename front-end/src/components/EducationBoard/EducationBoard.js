import React from "react";
import { useContext, useEffect } from "react";
import { loginContext } from "../Login/LoginProvider";

function EducationBoard() {
  const [user, setUser] = useContext(loginContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log("is logged in");
      setUser(loggedInUser);
    }
  }, []);
  return (
    <div>
      Education Board, Write your enquires
    </div>);
}

export default EducationBoard;
