import React from "react";
import { useContext, useEffect } from "react";
import { LoginContext } from "../App";

function Settings() {
  const { state, dispatch } = useContext(LoginContext);

  return <div>{state.user ? "Settings, Write your enquires" : null}</div>;
}

export default Settings;
