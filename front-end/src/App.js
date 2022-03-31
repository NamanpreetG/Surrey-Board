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
import { useEffect, useContext } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      return navigate("/homepage");
    }
  }, []);
  return (
    <LoginProvider>
      <NavBar />
      <div className="content">
        <Routes>
          {/* TODO: should "/" path lead to the login screen?
            if so then is there a need for "/login"? should it be
            changed to just "/"? */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          
          <Route exact path="/educationBoard" element={<EducationBoard />} />
          <Route exact path="/generalBoard" element={<GeneralBoard />} />
          <Route exact path="/societyBoard" element={<SocietyBoard />} />
          <Route exact path="/settings" element={<Settings />} />
         

          {/* authenticated links */}
          <Route
            path="/homepage"
            element={
              // <RequireAuth>
              <Homepage />
              // </RequireAuth>
            }
          />
        </Routes>
      </div>
    </LoginProvider>
  );
}

export default App;
