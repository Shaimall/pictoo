import React from "react";

const Nav = () => {
  return (
    <div className="bg-white container flex px-40 gap-2 mt-3">
      <div className="bg-[#A53DFF] w-12 h-12 rounded-full text-center text-2xl  ">
        <p className="pt-1.5 text-white">B</p>
      </div>
      <p className="text-2xl gap-2 pt-1">Brooklyn</p>
      <div className=" flex gap-4 absolute right-6 pt-2 px-40">
        <p>Home</p>
        <p>About</p>
        <p>Process</p>
        <p>Portfolio</p>
        <p>Blog</p>
        <p>Services</p>
        <p className="container bg-[#A53DFF] px-2 rounded-lg h-7">Contact</p>
      </div>
    </div>
  );
};

export default Nav;
