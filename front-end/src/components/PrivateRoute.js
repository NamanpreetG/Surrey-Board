import { Navigate } from "react-router-dom";
import { loginContext } from "./Login/LoginProvider";
import { useContext, useState, useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const loggedInUser = localStorage.getItem("user");

  if (loggedInUser) {
    return children;
  }

  return <Navigate to="/" />;
};
