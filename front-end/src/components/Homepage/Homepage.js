import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext, loginContext } from "../../App";

function Homepage() {
  const {state, dispatch} = useContext(LoginContext)
<<<<<<< HEAD
  const user = JSON.parse(localStorage.getItem("user"));
=======
  const user = JSON.parse(localStorage.getItem("user"))

>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
  return (
    <div>
      {user ? "Homepage" : null}
    </div>);
}

export default Homepage;
