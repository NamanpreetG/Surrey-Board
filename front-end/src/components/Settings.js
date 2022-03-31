import React from "react";
import { useContext, useEffect } from "react";
import { loginContext } from "./Login/LoginProvider";

function Settings() {
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
      Settings, Write your enquires
    </div>);
}

export default Settings;
