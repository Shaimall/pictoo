import React from "react";
export const Card = ({ title, description, icon }) => {
  return (
    <div className="md:flex md:text-left  bg-white  ">
      <div className="flex-row">
        <div className="">
          {icon}

          <p className="text-2xl text-black ">{title}</p>
        </div>
        <p className="text-base pt-4 mb-8 text-black">{description}</p>
      </div>
    </div>
  );
};
