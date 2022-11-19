import React from "react";
import Brook2 from "./Brook2";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#2B384C] container mx-auto flex lg:px-20 md:px-10 gap-2 mt-3 mb-3">
        <Brook2 />
        <div className=" md:flex gap-6 items-center mx-auto hidden text-white   ">
          <p className="text-base">Home</p>
          <p>About</p>
          <p>Process</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Services</p>
        </div>
        <div className="text-white mt-1 hidden md:block">
          Copyright © 2022 Picto.
        </div>
      </div>
    </div>
  );
};

export default Footer;
