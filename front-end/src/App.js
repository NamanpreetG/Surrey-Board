import NavBar from "./components/NavBar";
import Login from "./Login/Login";
import Register from "./Register/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
