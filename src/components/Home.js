import React from "react";
import { useNavigate } from "react-router-dom";
import { HiChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";
import Register from "../pages/Register";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-32 flex flex-col allign items-center gap-10 ">
      <h1 className="font-sans  text-[#c89FEB] pb-3  sm:text-3xl font-medium md:text-6xl font-semibold lg:text-8xl font-bold">
        Cresco Together!{" "}
      </h1>
      <h3 className="text-[white]  p-3 sm:text-xl font-normal md:text-3xl font-medium lg:text-4xl font-semibold">
        Web 3.0 Unlocked: Embrace the power of digital opulence
      </h3>
      <motion.div
        className="key-con"
        initial={{ y: -20 }}
        animate={{ y: 20 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 2,
          repeat: Infinity,
        }}
      >
        <HiChevronDoubleDown className="bg-[white] rounded-lg w-10 h-10" />
      </motion.div>

      <div className="flex gap-4 font-bold text-3xl justify-center mt-32">
        <button
          className="bg-[#5D69BE] text-[white]  w-52 rounded-lg p-2"
          onClick={() => {
            navigate("/register");
          }}
        >
          REGISTER
        </button>
        <button
          className="bg-[#5D69BE] text-[white] w-52 rounded-lg p-2"
          onClick={() => {
            navigate("/signin");
          }}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Home;
