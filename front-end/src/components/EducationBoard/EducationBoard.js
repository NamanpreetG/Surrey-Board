import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function EducationBoard() {
  const {state, dispatch} = useContext(LoginContext)

  return (
    <div>
      {state.user ? "Education Board, Write your enquires" : null}
    </div>);
}

export default EducationBoard;
