import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Card = ({ icon, title, description }) => {
  return (
    <div className="hover:shadow-lg container p-6 ">
      <div className="flex gap-2 ">
        <div className="text-3xl text-[#A53DFF] hover:text-white px-2 py-2 rounded-lg bg-[#EDD8FF80] hover:bg-[#A53DFF]">
          {icon}
        </div>
        <div className="">
          <p className="text-sm text-[#87909D] ">{title}</p>
          <p className="text-[#132238]  ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export const Card2 = ({ image, title, title2, description }) => {
  return (
    <div className=" ">
      <div className="container  ">
        <div className="">{image}</div>
        <div className="container border-t-0 border-2 px-10 py-10 ">
          <p className="text-xs text-[#87909D] ">{title}</p>
          <p className="text-lg font-bold text-[#132238] mt-1">{title2}</p>
          <p className="text-sm text-[#556070] mt-3 ">{description}</p>

          <div>
            <button className="flex flex-row border-2 py-2 px-6 mt-5 rounded  justify-center border-[#A53DFF] text-[#A53DFF] font-bold text-base">
              Case Study
              <AiOutlineArrowRight className="mt-1 ml-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
