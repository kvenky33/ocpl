import React from "react";
import Ocpl from "./pages/Ocplpage.js";
import Register from "./pages/Register.js";
import Signin from "./pages/Signin.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ocpl />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
