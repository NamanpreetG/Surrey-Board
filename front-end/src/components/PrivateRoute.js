import { Navigate } from "react-router-dom";
import { loginContext } from "./Login/LoginProvider";
import { useContext, useState, useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const [loggedIn, setloggedIn] = useState();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setloggedIn(loggedInUser);
    }
  }, []);
  const loggedInUser = localStorage.getItem("user");


  if (loggedInUser) {
    return children;
  } else{
    console.log("userDetails doesnt exist");
  }

  return <Navigate to="/" />;
};
