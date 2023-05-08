import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="mt-20 text-3xl text-[white] w-6/12 bg-[rgba(59,130,246,.5)] rounded-lg flex flex-col gap-8 py-8 px-14 ">
        <div className="flex flex-col gap-8">
          <span> GET IN TOUCH</span>
          <h3 className="text-4xl font-extrabold ">Contact.</h3>
        </div>

        <div className=" flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span>Your Name</span>
            <input
              type="text"
              placeholder="What's your good name?"
              className="border-[.5px] text-lg text-[white] rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
            />
          </div>
          <div className="flex flex-col gap-4">
            <span>Your email</span>
            <input
              type="text"
              placeholder="What's your web address?"
              className="border-[.5px] text-lg text-[white]  rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
            />
          </div>
          <div className="flex flex-col gap-4">
            <span>Your </span>
            <textarea
              type="text "
              placeholder="What's your web address?"
              className="border-[.5px] text-lg text-[white] h-56 rounded-lg shadow-sm p-3 w-full bg-[#262d3b] "
            />
          </div>
          <button className="bg-[#0e1625] text-3xl text-bold w-32 rounded-lg ">
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
