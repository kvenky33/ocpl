import React, { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed flex gap-96 text-white justify-between items-center my-0 w-full bg-[#010716] px-4 z-10 ">
      <img
        src="https://ocpl.tech/assets/ocpllogo-0d9039c9.webp"
        alt="logo"
        className={
          !nav
            ? "w-30 h-40 py-4  ease-in-out duration-500"
            : "w-30 h-40  ease-in-out duration-500"
        }
      />

      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#c0c8d7]">
          {" "}
          <a href="#about">About</a>
        </li>

        <li className="p-4 cursor-pointer hover:text-[#c0c8d7]">
          <a href="#product">Product</a>
        </li>

        <li className="p-4 cursor-pointer hover:text-[#c0c8d7]">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineMenu size={20} className="cursor-pointer bg-#c0c8d7" />
        ) : (
          <AiOutlineClose size={30} className="cursor-pointer bg-#c0c8d7 " />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#0e1625ad] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-50 cursor-pointer hover:text-[#c0c8d7]">
            About
          </li>

          <li className="p-4 border-b border-gray-50 cursor-pointer hover:text-[#c0c8d7]">
            Product
          </li>

          <li className="p-4 border-b border-gray-50 cursor-pointer hover:text-[#c0c8d7]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
