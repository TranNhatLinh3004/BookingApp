import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./App.css";
import ScrollUp from "./components/scrollup/ScrollUp";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/home");
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
      <ScrollUp />
    </div>
  );
}

export default App;
