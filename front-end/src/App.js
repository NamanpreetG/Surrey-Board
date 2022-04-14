import NavBar from "./components/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Homepage from "./components/Homepage/Homepage";
import EventsBoard from "./components/EventsBoard/EventsBoard";
import SocietyBoard from "./components/SocietyBoard/SocietyBoard";
import GeneralBoard from "./components/GeneralBoard/GeneralBoard";
import CreatePost from "./components/CreatePost/CreatePost";
import Posts from "./components/CreatePost/ShowPost";
import Settings from "./components/Settings";
import CreateSociety from "./components/CreateSociety/CreateSociety";
import SpecificPost from "./components/SpecificPost/SpecificPost"

import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer, createContext } from "react";
import { PrivateRoute } from "./components/PrivateRoute";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import FollowSociety from "./components/SocietyBoard/FollowSociety";



export const LoginContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      if (!localStorage.getItem("user")) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
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
  const user = localStorage.getItem("user")
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <LoginContext.Provider value={{ state, dispatch }}>
        <NavBar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              exact
              element={user ? <Homepage /> : <Login />}
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
              path="/EventsBoard"
              element={
                <PrivateRoute>
                  <EventsBoard />
                </PrivateRoute>
              }
            />
            <Route
            path="/createsociety"
            element={
              <PrivateRoute>
                <CreateSociety />
              </PrivateRoute>
            }
          />
            <Route
              path="/GeneralBoard"
              element={
                <PrivateRoute>
                  <GeneralBoard />
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
              path="/societyBoard"
              element={
                <PrivateRoute>
                  <SocietyBoard />
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
              path="/specificPost"
              element={
                <PrivateRoute>
                  <SpecificPost />
                </PrivateRoute>
              }
            />

            <Route
              path="/followSociety"
              element={
                <PrivateRoute>
                  <FollowSociety />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </LoginContext.Provider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </>
  );
}

export default App;
