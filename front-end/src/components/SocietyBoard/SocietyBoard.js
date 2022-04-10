import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../App";

function SocietyBoard() {
  const { state, dispatch } = useContext(LoginContext);

  return <div>{state.user ? "Society Board, Write your enquires" : null}</div>;
}

export default SocietyBoard;
