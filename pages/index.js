import React from "react";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <header className="bg-gradient-to-r to-[#DA4DF1] from-white relative h-[1500px]">
        <div className="grid grid-cols-12 px-20 gap-2  py-20">
          <div className="col-span-6 mt-24">
            <h className="text-5xl leading-10 font-bold">
              Hello, I’m<br></br> Brooklyn Gilbert
            </h>
            <p className="text-base mt-8">
              I'm a Freelance UI/UX Designer and Developer based in London,
              England. I strives to build immersive and beautiful web
              applications through carefully crafted code and user-centric
              design.
            </p>
            <button className="bg-[#A53DFF]  mt-6 rounded-lg px-4 py-1.5 text-xs text-white ">
              {" "}
              Say Hello!
            </button>
            <div className="grid grid-cols-3 gap-1 text-center py-4 lg:mt-56">
              <div className="bg-[#EDD8FF] py-4 rounded-lg ">
                <h className="text-lg font-bold">15 Y.</h>
                <p className="text-xs"> Experience</p>
              </div>
              <div className="bg-[#EDD8FF] py-4 rounded-lg  ">
                <h className="text-lg font-bold">250+</h>
                <p className="text-xs "> Projects Completed</p>
              </div>
              <div className="bg-[#EDD8FF] py-4 rounded-lg">
                <h className="text-lg font-bold">58</h>
                <p className="text-xs "> Happy Client</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 bg bg-no-repeat bg-center bg-[url('/img/man.png')]"></div>
        </div>

        <div className=" grid grid-cols-2 gap-10 container absolute -bottom-20 left-12 bg-white mt-16  ">
          <div>
            <img className="" src="img/man.png" alt="" />
            {/* <img className="" src="img/card.png" alt="" /> */}
          </div>
          <div className="mt-60 ">
            <h className="text-4xl font-bold">
              I am Professional User <br></br> Experience Designer
            </h>
            <p className="mt-5">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="mt-5">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div className="flex gap-5 mt-5">
              <button className="px-4 py-2 bg-[#A53DFF] text-white">
                My Project
              </button>
              <button className="flex px-4 py-2 border-2 border-[#A53DFF] text-[#A53DFF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
