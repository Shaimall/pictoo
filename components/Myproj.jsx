import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const Myproj = () => {
  return (
    <div className="flex gap-5">
      {" "}
      <button className="px-6 py-3 text-white bg-[#A53DFF] rounded-md">
        {" "}
        My Project
      </button>
      <button className="flex gap-2 border-2 rounded-md border-[#8b51e2] py-3 px-6">
        <AiOutlineDownload />
        Download CV
      </button>
    </div>
  );
};

export default Myproj;
