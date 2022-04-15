import { Navigate } from "react-router-dom";
import { LoginContext } from "../App";
import { useContext, useState, useEffect } from "react";

export const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"))

  if (user) {
    return children;
  } else {
  }

  return <Navigate to="/" />;
};
