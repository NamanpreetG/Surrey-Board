import React from "react";
import { createContext, useState } from "react";

//create a context, with createContext api
export const loginContext = createContext();

const LoginProvider = (props) => {
  // this state will be shared with all components
  const [user, setUser] = useState("");

  return (
    // this is the provider providing state
    <loginContext.Provider value={[user, setUser]}>
      {props.children}
    </loginContext.Provider>
  );
};

export default LoginProvider;
