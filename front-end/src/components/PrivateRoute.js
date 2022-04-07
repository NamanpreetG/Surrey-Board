import { Navigate } from "react-router-dom";
import { loginContext } from "./Login/LoginProvider";
import { useContext, useState, useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    setUser(loggedIn);
  }, []);

  if (user) {
    return children;
  }

  return <Navigate to="/" />;
};
