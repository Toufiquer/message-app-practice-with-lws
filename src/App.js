import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/pages/LogIn/LogIn";
import Register from "./components/Register/Register";
import Chat from "./components/pages/Chat/Chat";
import Messages from "./components/Messages/Messages";
import ChatIndex from "./components/Outlet/ChatIndex";
import { useAuthChecked } from "./hooks/useAuthChecked";
import AuthChecking from "./components/pages/AuthChecking/AuthChecking";
import PrivateRoute from "./components/CustomRoute/PrivateRoute";
import PublicRoute from "./components/CustomRoute/PublicRoute";

function App() {
  const isAuthCheck = useAuthChecked();

  return isAuthCheck ? (
    <AuthChecking />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Chat />
            </PrivateRoute>
          }
        >
          <Route index element={<ChatIndex />}></Route>
          <Route path="/chat/:id" element={<Messages />}></Route>
        </Route>
        <Route
          path="/logIn"
          element={
            <PublicRoute>
              <LogIn />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
