import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Err404 from "./components/404Err/Err404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Err404 />}></Route>
    </Routes>
  );
}

export default App;
