import React from "react";
import Brook from "./Brook";

const Nav = () => {
  return (
    <div className="bg-white container flex lg:px-20 md:px-10 gap-2 mt-3">
      <Brook />
      <div className=" flex items-center md:ml-auto gap-4">
        <p className="">Home</p>
        <p>About</p>
        <p>Process</p>
        <p>Portfolio</p>
        <p>Blog</p>
        <p>Services</p>
        <p className="container bg-[#A53DFF] px-2 rounded-md h-7">Contact</p>
      </div>
    </div>
  );
};

export default Nav;
