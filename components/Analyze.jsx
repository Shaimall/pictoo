import React from "react";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineLaptop } from "react-icons/ai";

const Analyze = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex flex-col container p-9 bg-white rounded-xl">
          <div className="w-16 h-16 bg-[#EDD8FF] hover:bg-[#A53DFF] rounded-md ">
            <div className="flex justify-center items-center pt-4">
              <BiLineChart className="w-6 h-7 text-[#A53DFF] hover:text-white flex  " />
            </div>
          </div>
          <h className=" text-xl font-bold mt-8">1.Research</h>
          <p className=" text-[#556070] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
        <div className="flex flex-col container p-9 bg-white rounded-xl mt-4">
          <div className="w-16 h-16 bg-[#EDD8FF] hover:bg-[#A53DFF] rounded-md ">
            <div className="flex justify-center items-center pt-4">
              <AiOutlineLaptop className="w-6 h-7 text-[#A53DFF] hover:text-white flex  " />
            </div>
          </div>
          <h className=" text-xl font-bold mt-8">1.Research</h>
          <p className=" text-[#556070] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
