import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext} from "../App";

function Settings() {
  const [user, setUser] = useContext(LoginContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      console.log("is logged in");
      setUser(loggedInUser);
    }
  }, []);
  return (
    <div>
      Settings, Write your enquiries
    </div>);
}

export default Settings;
