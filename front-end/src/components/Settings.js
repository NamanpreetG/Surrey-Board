import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

function Settings() {
  const { state, dispatch } = useContext(LoginContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return <div>{user ? "Settings, Write your enquires" : null}</div>;
}

export default Settings;
