import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import LoginProvider from "./components/Login/LoginProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <LoginProvider>
        <NavBar />
        <div className="content">
          <Routes>
            {/* TODO: should "/" path lead to the login screen?
            if so then is there a need for "/login"? should it be
            changed to just "/"? */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

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
    </Router>
  );
}

export default App;
