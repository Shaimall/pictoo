import React from "react";
import Brook from "./Brook";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div>
      <div className="bg-white container flex lg:px-20 md:px-10 gap-2 mt-3 mb-3">
        <Brook />
        <div className=" md:flex gap-6 items-center md:ml-auto hidden   ">
          <p className="text-base">Home</p>
          <p>About</p>
          <p>Process</p>
          <p>Portfolio</p>
          <p>Blog</p>
          <p>Services</p>
          <button className="bg-[#A53DFF] px-6 py-3 rounded-[4px] text-white">
            {" "}
            Contact
          </button>
        </div>

        {/* <button className="mobile-menu-button md:hidden  focus:outline-none group">
          {" "}
          <AiOutlineMenu />
          <div className="absolute top-0  opacity-0 h-screen bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
            <ul className="flex flx-col items-center  text-md cursor-pointer pt-10 ">
              <li className="hover:bg-slate-500 ">Home</li>
              <li className="hover:bg-slate-500 w-full">Home</li>
              <li className="hover:bg-slate-500  w-full">Home</li>
              <li className="hover:bg-slate-500  w-full">Home</li>
              <li className="hover:bg-slate-500  w-full">Home</li>
            </ul>
          </div>
        </button> */}
      </div>
      {/* <div className="md:hidden mobile-menu">
        <p className="text-base">Home</p>
        <p>About</p>
        <p>Process</p>
        <p>Portfolio</p>
        <p>Blog</p>
        <p>Services</p>
        <button className="bg-[#A53DFF] px-6 py-3 rounded-[4px] text-white">
          {" "}
          Contact
        </button>
      </div> */}
    </div>
  );
};
// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector("mobile-menu");

// btn.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
// });

export default Nav;
