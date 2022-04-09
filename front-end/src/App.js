import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import LoginProvider from "./components/Login/LoginProvider";
import EducationBoard from "./components/EducationBoard/EducationBoard";
import SocietyBoard from "./components/SocietyBoard/SocietyBoard";
import GeneralBoard from "./components/GeneralBoard/GeneralBoard";
import Settings from "./components/Settings";

import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { loginContext } from "./components/Login/LoginProvider";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const loggedInUser = localStorage.getItem("user")
  
  return (
    <LoginProvider>
      <NavBar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            exact
            element={loggedInUser ? <Homepage /> : <Login />}
          />
          <Route exact path="/register" element={<Register />} />

          {/* authenticated links */}
          <Route
            path="/homepage"
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />
          <Route
            path="/educationBoard"
            element={
              <PrivateRoute>
                <EducationBoard />
              </PrivateRoute>
            }
          />
          <Route
            path="/generalBoard"
            element={
              <PrivateRoute>
                <GeneralBoard />
              </PrivateRoute>
            }
          />
          <Route
            path="/societyBoard"
            element={
              <PrivateRoute>
                <SocietyBoard />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;
