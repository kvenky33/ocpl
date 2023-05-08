import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col gap-8 py-24 align items-center text-[white] bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40980f65-c635-4896-9d4f-6515b53e01a5/d75arky-ccdaf0ab-19ea-46bb-9bb2-2c427c380a6c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQwOTgwZjY1LWM2MzUtNDg5Ni05ZDRmLTY1MTViNTNlMDFhNVwvZDc1YXJreS1jY2RhZjBhYi0xOWVhLTQ2YmItOWJiMi0yYzQyN2MzODBhNmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KHVzxtEtROi43xNUEBFM42pnHuQKf4SU-TAUJQJczJQ)]">
      <div className="flex flex-col gap-4 w-6/12">
        <span>Your Name</span>
        <input
          type="text"
          placeholder="Enter your name"
          className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
        />
      </div>
      <div className="flex flex-col gap-4 w-6/12">
        <span>Your phone number</span>
        <input
          type="number"
          placeholder="Enter Your number"
          className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
        />
      </div>
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
          placeholder="provide astrong password"
          className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
        />
      </div>
      <button className="bg-[#9ba6bb] text-3xl text-bold w-64 h-18 rounded-lg text-[#0e1625] ">
        REGISTER
      </button>
    </div>
  );
};

export default Register;
