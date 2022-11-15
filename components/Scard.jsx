import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BiBeer } from "react-icons/bi";
import { IconContext } from "react-icons";

const Scard = () => {
  return (
    <div className="bg-white lg:px-5 lg:py-5 md:px-2 md:py-3 rounded-md px-10 py-5 ">
      {" "}
      <div className=" flex items-center lg:gap-4 md:gap-2 gap-4">
        <FaFacebookF className="hover:text-white hover:scale-[200%] text-lg text-[#A53DFF] hover:bg-[#A53DFF] hover:p-1 hover:rounded-sm" />

        <RiBasketballLine className="hover:text-white hover:scale-[200%] text-lg text-[#A53DFF] hover:bg-[#A53DFF] hover:p-1 hover:rounded-sm" />
        <FaInstagram className="hover:text-white hover:scale-[200%] text-lg text-[#A53DFF] hover:bg-[#A53DFF] hover:p-1 hover:rounded-sm" />
        <AiFillLinkedin className="hover:text-white hover:scale-[200%] text-lg text-[#A53DFF] hover:bg-[#A53DFF] hover:p-1 hover:rounded-sm" />
        <BiBeer className="hover:text-white hover:scale-[200%] text-lg text-[#A53DFF] hover:bg-[#A53DFF] hover:p-1 hover:rounded-sm" />
      </div>
    </div>
  );
};

export default Scard;
