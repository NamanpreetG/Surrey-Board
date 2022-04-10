import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import LoginProvider from "./components/Login/LoginProvider";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { loginContext } from "./components/Login/LoginProvider";
import { PrivateRoute } from "./components/PrivateRoute";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/CreatePost/ShowPost";





function App() {
  const loggedInUser = localStorage.getItem("user");

  return (
    <LoginProvider>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" exact element={loggedInUser ? <Homepage /> : <Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/posts" element={<Posts />} />

          

          {/* authenticated links */}
          <Route
            path="/homepage"
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;
