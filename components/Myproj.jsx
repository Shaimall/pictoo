import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { IconContext } from "react-icons";

const Myproj = () => {
  return (
    <IconContext.Provider value={{ color: "#A53DFF", size: "25px" }}>
      <div className="flex gap-5">
        {" "}
        <button className="px-6 py-3 text-white bg-[#A53DFF] rounded-md font-semibold">
          {" "}
          My Project
        </button>
        <button className="flex gap-2 border-2 rounded-md border-[#8b51e2] py-3 px-6 text-[#8b51e2] font-semibold">
          <AiOutlineDownload />
          Download CV
        </button>
      </div>
    </IconContext.Provider>
  );
};

export default Myproj;
