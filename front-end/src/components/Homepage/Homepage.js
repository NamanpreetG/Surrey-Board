import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function Homepage() {
  const {state, dispatch} = useContext(LoginContext)

  return (
    <div>
      {state.user ? "Homepage" : null}
    </div>);
}

export default Homepage;
