import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function EducationBoard() {
  const user = JSON.parse(localStorage.getItem("user"))

  return (
    <div>
      {user ? "Education Board, Write your enquires" : null}
    </div>);
}

export default EducationBoard;
