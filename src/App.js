import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/pages/LogIn/LogIn";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
