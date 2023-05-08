import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
const Ocpl = () => {
  return (
    <div>
      <Navbar />
      <div className=" px-10 pt-44 pb-10">
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
    </div>
  );
};

export default Ocpl;
