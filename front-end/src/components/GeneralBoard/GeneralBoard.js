import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function GeneralBoard() {
  const { state, dispatch } = useContext(LoginContext);

  return <div>{state.user ? "General Board, Write your enquires" : null}</div>;
}

export default GeneralBoard;
