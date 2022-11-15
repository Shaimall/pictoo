import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { RiBasketballLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { BiBeer } from "react-icons/bi";
import { IconContext } from "react-icons";

const Scard = () => {
  return (
    <IconContext.Provider value={{ color: "#A53DFF", size: "20px" }}>
      <div className="bg-white lg:px-5 lg:py-5 md:px-2 md:py-3 rounded-md px-10 py-5 ">
        {" "}
        <div className=" flex justify-center lg:gap-4 md:gap-2 gap-4">
          <div className="hover:bg-[#A53DFF] hover:color-white ">
            <FaFacebookF />
          </div>
          <div className="hover:bg-[#A53DFF] color-white size-2em ">
            <RiBasketballLine />
          </div>
          <div className="hover:bg-[#A53DFF] color-white size-2em ">
            <FaInstagram />
          </div>
          <div className="hover:bg-[#A53DFF] color-white size-2em ">
            <AiFillLinkedin />
          </div>
          <div className="hover:bg-[#A53DFF] color-white size-2em ">
            <BiBeer />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Scard;
