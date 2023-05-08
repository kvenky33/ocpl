import React from "react";

const Signin = () => {
  return (
    <div className="flex flex-col gap-8 w-11/12 py-24 align items-center text-[white] bg-[url]">
      <div className="flex flex-col gap-4 w-6/12">
        <span>Your emailId</span>
        <input
          type="email"
          placeholder="Enter Your mail"
          className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
        />
      </div>
      <div className="flex flex-col gap-4 w-6/12">
        <span>Your password</span>
        <input
          type="password"
          placeholder="Enter your password"
          className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
        />
      </div>
      <button className="bg-[#9ba6bb] text-3xl text-bold w-48 h-18 rounded-lg text-[#0e1625] ">
        SIGN IN
      </button>
    </div>
  );
};

export default Signin;
