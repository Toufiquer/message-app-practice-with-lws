import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/pages/LogIn/LogIn";
import Register from "./components/Register/Register";
import Chat from "./components/pages/Chat/Chat";
import Messages from "./components/Messages/Messages";
import Outlet1 from "./components/Outlet/Outlet1";
import Outlet2 from "./components/Outlet/Outlet2";
import ChatIndex from "./components/Outlet/ChatIndex";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />}>
          <Route index element={<ChatIndex />}></Route>
          <Route path="/chat/:id" element={<Outlet1 />}></Route>
        </Route>
        {/* <Route path="/" element={<LogIn />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
