import { Navigate } from "react-router-dom";
import { LoginContext } from "../App";
import { useContext, useState, useEffect } from "react";

export const PrivateRouteAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"))

  if (user.isAdmin) {
    return children;
  }

  return <Navigate to="/generalBoard" />;
};
