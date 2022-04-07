import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import LoginProvider from "./components/Login/LoginProvider";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { loginContext } from "./components/Login/LoginProvider";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setUser(loggedInUser)
    }
  }, []);

  return (
    <LoginProvider>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;
