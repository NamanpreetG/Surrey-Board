import { Navigate } from "react-router-dom";
import { LoginContext } from "../App";
import { useContext, useState, useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user")

  if (user) {
    return children;
  } else {
    console.log("state.user does not exist");
  }

  return <Navigate to="/" />;
};
