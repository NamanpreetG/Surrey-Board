import React from "react";
import { useContext, useEffect } from "react";
import { loginContext } from "../Login/LoginProvider";

function Homepage() {
  const [userDetails, setUserDetails] = useContext(loginContext)

  return (
    <div>
      hello
    </div>);
}

export default Homepage;
