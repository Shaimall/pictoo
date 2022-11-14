import React from "react";
export const Card = ({ title, description, icon }) => {
  return (
    <div className="md:flex md:text-left  bg-white rounded-2xl ">
      <div className="flex-row">
        <div className="">
          {icon}

          <p className="text-2xl text-black ">{title}</p>
        </div>
        <p className="text-base pt-4 text-black">{description}</p>
      </div>
    </div>
  );
};

export const Card2 = ({ image, title, title2, description, button }) => {
  return (
    <div className="container px-20 mt-10">
      <div className="relative">{image}</div>
      <div className="flex-row container px-10 pt-5">
        <h className="text-xs"> {title}</h>
        <br></br>
        <h className="text-lg">{title2}</h>
        <p className="text-xs mt-2">{description}</p>
        <button className="border-2 border-[#A53DFF] mt-5 px-5 mb-4">
          {button}
        </button>
      </div>
    </div>
  );
};
