import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import EducationBoard from "./components/EventsBoard/EventsBoard";
import SocietyBoard from "./components/SocietyBoard/SocietyBoard";
import GeneralBoard from "./components/GeneralBoard/GeneralBoard";
import CreatePost from "./components/CreatePost/CreatePost"
import Posts from "./components/CreatePost/ShowPost";
import Settings from "./components/Settings";
import SpecificPost from "./components/SpecificPost/SpecificPost";

import { Route, Routes, useNavigate } from "react-router-dom";
import {
  useEffect,
  useContext,
  useState,
  useReducer,
  createContext,
} from "react";
import { PrivateRoute } from "./components/PrivateRoute";

export const LoginContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        user: action.payload,
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: user,
      });
    }
  }, []);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <NavBar />
      <div className="content">
        <Routes>
          <Route
            path="/"
            exact
            element={state.user ? <Homepage /> : <Login />}
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
          <Route
            path="/createpost"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route
            path="/posts"
            element={
              <PrivateRoute>
                <Posts />
              </PrivateRoute>
            }
          />
           <Route
            path="/specificPost"
            element={
              <PrivateRoute>
                <SpecificPost />
              </PrivateRoute>
            }
            />
        </Routes>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
