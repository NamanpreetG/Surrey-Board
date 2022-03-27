import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import LoginProvider from "./components/Login/LoginProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <LoginProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/homepage"
              element={
                // <RequireAuth>
                <Homepage />
                // </RequireAuth>
              }
            />
          </Routes>
        </LoginProvider>
      </div>
    </Router>
  );
}

export default App;
