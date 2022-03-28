import React from "react";
import { useContext } from "react";
import { loginContext } from "../Login/LoginProvider";

function Homepage() {
  const [loginStatus, setLoginStatus] = useContext(loginContext);
  return (
    <div>
      {loginStatus}
    </div>);
}

export default Homepage;
