import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext} from "../App";

function Settings() {
<<<<<<< HEAD
  const { state, dispatch } = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return <div>{user ? "Settings, Write your enquires" : null}</div>;
=======
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
>>>>>>> 3b455066d635da1f51683219ec2883c056bfd2e2
}

export default Settings;
