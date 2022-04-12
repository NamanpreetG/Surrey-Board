import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function Homepage() {
  const {state, dispatch} = useContext(LoginContext)
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      {user ? "Homepage" : null}
    </div>);
}

export default Homepage;
