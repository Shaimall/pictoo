import React from "react";
import Nav from "../components/Nav";
import Scard from "../components/Scard";
import Myproj from "../components/Myproj";
import Research from "../components/Research";
import { Card2 } from "../components/Card";
import Analyze from "../components/Analyze";
import Portfolio from "../components/Portfolio";
import { AiOutlineArrowRight } from "react-icons/ai";
import Sec4 from "../components/Sec4";
import UE from "../components/UE";
import { GoLocation } from "react-icons/go";
import { Card } from "../components/Card";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../components/Footer";
import Mobilenav from "../components/Mobilenav";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto ">
        <Nav />
        <Mobilenav />
      </div>
      <header className="bg-gradient-to-b to-[#C4F5E9] from-pink-300 relative min-h-[1500px] ">
        <section className="container mx-auto px-16 md:px-0">
          <div className=" grid md:grid-cols-2 lg:px-20 md:px-10 gap-2  py-20">
            <div className="">
              <h className="  lg:text-5xl md:text-3xl leading-normal font-bold text-5xl ">
                Hello, I’m<br></br> Brooklyn Gilbert
              </h>
              <p className="md:text-base mt-8 container xl:pr-36 text-2xl">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <button className="bg-[#A53DFF]  mt-6 rounded-md px-6 py-3 text-sm text-white ">
                {" "}
                Say Hello!
              </button>
              <div className="grid grid-cols-3 gap-1 text-center py-4 lg:mt-48 md:mt-14 xl:mt-64">
                <div className="bg-[#EDD8FF] py-4 rounded-l-sm  ">
                  <h className="text-3xl font-bold text-[#424E60]">15 Y.</h>
                  <p className="text-base text-[#697484]"> Experience</p>
                </div>
                <div className="bg-[#EDD8FF] py-4   ">
                  <h className="text-3xl font-bold text-[#424E60]">250+</h>
                  <p className="text-base text-[#697484] ">
                    {" "}
                    Projects Completed
                  </p>
                </div>
                <div className="bg-[#EDD8FF] py-4 rounded-r-sm">
                  <h className="text-3xl font-bold text-[#424E60]">58</h>
                  <p className="text-base text-[#697484] "> Happy Client</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <img className="rounded-2xl  " src="img/man1.jpeg" alt="" />
            </div>
          </div>
        </section>

        <section className=" md:container md:mx-auto w-full md:absolute md:-bottom-12 md:inset-x-11 my-14 md:my-0">
          <div className=" max-w-7xl bg-white md:mx-auto rounded-lg md:px-10 lg:px-20 md:py-12 ">
            <div className="grid md:grid-cols-2 md:gap-4  ">
              <div className="flex justify-center items-center">
                <div className="relative mx-auto place-content-center">
                  <div className="absolute lg:inset-x-0 md:inset-x-24 inset-x-20 md:-bottom-7 -bottom-5 flex justify-center ">
                    <Scard />
                  </div>
                  <div className="rounded-md">
                    <img className="w-full" src="img/mans.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="md:mt-24 mt-12 text-center md:text-left">
                <h className="xl:text-4xl lg:3xl md:xl font-bold text-3xl">
                  I am Professional User Experience Designer
                </h>
                <p className="lg:text-lg mt-2 text-lg">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services and online
                  stores. My passion is to design digital user experiences.
                </p>
                <p className="mt-2 text-lg">
                  I design and develop services for customers specializing
                  creating stylish, modern websites, web services.
                </p>
                <div className="mt-4 flex justify-center  md:justify-start">
                  <Myproj />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <section className="bg-[#F0F1F3] overflow-hidden ">
        <div className="grid md:grid-cols-12 md:pt-52 md:pb-52 pt-4 gap-5 container mx-auto min-h-full px-5 md:px-none">
          <div className="col-span-5 md:mt-48 text-center md:text-left ">
            <h className="text-5xl font-bold  "> Work Process</h>
            <p className="text-[#697484] mt-3 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-[#697484] mt-2 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div className="col-span-1 hidden md:block"></div>

          <div className="col-span-3 container px-4 ">
            <Research />
          </div>
          <div className="col-span-3 md:mt-9 container px-4">
            <Analyze />
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <h className="text-5xl font-bold pt-24 flex justify-center">
          Portfolio
        </h>
        <p className=" text-lg text-[#87909D] mx-auto text-center md:w-1/3 mt-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.{" "}
        </p>
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-3 gap-6 container mt-16 mx-auto">
            {CARD2.map((item, i) => (
              <Card2 {...item} key={i} />
            ))}
          </div>
          <button className="bg-[#A53DFF] px-6 py-3 text-white font-bold flex mx-auto mt-12 mb-20 rounded ">
            My Project
          </button>
        </div>
      </section>
      <section className="bg-[#132238]">
        <div className="container mx-auto px-20 py-20 ">
          <h className="md:text-5xl text-3xl text-white font-bold text-center flex justify-center   ">
            Do you have Project Idia?<br></br> Let's discuss your project!
          </h>
          <p className="text-lg font-semibold flex justify-center text-center text-[#A5ACB5] mt-10">
            There are many variations of passages of Lorem Ipsum available,
            <br></br> but the majority have suffered alteration.
          </p>
          <div className="flex justify-center mt-6 ">
            <button className="bg-[#A53DFF] font-semibolds text-white px-6 py-3 flex rounded">
              {" "}
              Lets's Work Together
              <AiOutlineArrowRight className="mt-1 ml-3" />
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto py-24">
          <div className="flex flex-col items-center">
            <h className="font-bold text-5xl text-[#132238]">Blog</h>
            <p className="text-lg text-[#87909D] mt-5 text-center">
              There are many variations of passages of Lorem Ipsum available,
              <br></br>
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="mt-10 px-10">
            <Sec4 />
          </div>
        </div>
      </section>
      <section className="bg-[#F0F1F3] ">
        <div className="container mx-auto py-24 px-14 ">
          <div className="grid md:grid-cols-2">
            <div className="mt-20">
              <h className="text-[#333333] font-bold text-5xl"> What I do?</h>
              <p className="text-lg text-[#87909D] mt-5 container md:pr-36 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-[#87909D] text-lg mt-3 md:w-4/6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </p>
              <button className="bg-[#A53DFF] px-6 py-3 rounded text-white font-bold mt-6">
                {" "}
                Say Hello!
              </button>
            </div>
            <div className="mt-5 md:mt-0">
              <UE />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto text-center min-h-screen my-24">
          <h className="text-5xl text-[#132238] font-bold">Happy Clients</h>
          <p className="text-[#87909D] text-lg mt-6 ">
            There are many variations of passages of Lorem Ipsum available,
            <br></br> but the majority have suffered alteration.
          </p>
          <div className=" grid md:grid-cols-6 gap-6 flex justify-center">
            <img className="" src="img/google.png" alt="" />
            <img className="" src="img/dribbble.png" alt="" />
            <img className="" src="img/linkedin.png" alt="" />
            <img className="" src="img/amazon.png" alt="" />
            <img className="" src="img/medium.png" alt="" />
            <img className="" src="img/spotify.png" alt="" />
          </div>
          <div className="mt-28">
            <h className="text-5xl font-bold text-[#333333]  ">Testimonial</h>
            <p className="text-lg text-[#87909D] mt-6">
              There are many variations of passages of Lorem Ipsum available,
              <br></br> but the majority have suffered alteration.
            </p>
            <p className="font-bold text-[#2B384C] mt-14">
              “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
              mollis felis turpis, nec semper odio<br></br> convallis at.
              Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec
              quis placerat nibh.<br></br>
              Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
              <br></br>
              Morbi ornare elit at libero suscipit porta.”
            </p>
            <p className="text-lg font-bold mt-6">Esther Howard</p>
            <p className="text-base mt-2">Managing Director, ABC company</p>
          </div>
          <div className="container mx-auto  ">
            <div className="grid md:grid-cols-2 gap-4 container p-20 rounded-2xl shadow-2xl mt-14   ">
              <div>
                <h className="text-4xl font-bold text-[#132238]">
                  Let’s discuss your Project
                </h>
                <p className="text-lg text-[#87909D]">
                  There are many variations of passages of Lorem Ipsu available.
                  <br></br> but the majority have suffered alte.
                </p>
                <div className="mt-9 flex-col ">
                  {CARD.map((item, i) => (
                    <Card {...item} key={i} />
                  ))}
                </div>
                <Scard />
              </div>
              <div>
                <h className="text-[#87909D] text-lg">
                  There are many variations of passages of Lorem Ipsu available,
                  <br></br>
                  but the majority have suffered alte.
                </h>
                <div className="flex flex-col gap-4 mt-8">
                  <form className="flex text-[#A53DFF]">
                    <input
                      className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                      id="Name"
                      type="Name"
                      placeholder="Name"
                    />
                  </form>
                  <form className="flex text-[#A53DFF]">
                    <input
                      className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                      id="Name"
                      type="Name"
                      placeholder="Email"
                    />
                  </form>
                  <form className="flex text-[#A53DFF]">
                    <input
                      className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                      id="Name"
                      type="Name"
                      placeholder="Location"
                    />
                  </form>
                  <div className="grid md:grid-cols-2 gap-2">
                    <form className="flex text-[#A53DFF] w-1/2">
                      <input
                        className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                        id="Name"
                        type="Name"
                        placeholder="Budget"
                      />
                    </form>
                    <form className="flex text-[#A53DFF]">
                      <input
                        className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                        id="Name"
                        type="Name"
                        placeholder="Subject"
                      />
                    </form>
                  </div>
                  <form className="flex text-[#A53DFF]">
                    <input
                      className="border-b-2 border-[#A53DFF] p-2 flex-1 text-[#A53DFF] placeholder-[#A53DFF]"
                      id="Name"
                      type="Name"
                      placeholder="Message"
                    />
                  </form>
                </div>
                <button className="px-6 py-3 bg-[#A53DFF] flex text-white rounded gap-2 mt-10">
                  Submit <BsArrowRight className="mt-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[#2B384C] pt-40 pb-14  ">
          <Footer />
        </div>
      </section>
    </div>
  );
}

const CARD = [
  {
    icon: <GoLocation />,

    title: "Address:",
    description: "New Mexico 31134",

    href: "#",
  },
  {
    icon: <GoLocation />,

    title: "My Email:",
    description: "mymail@mail.com",

    href: "#",
  },
  {
    icon: <GoLocation />,

    title: "Call Me Now::",
    description: "00-1234 00000",

    href: "#",
  },
];

const CARD2 = [
  {
    image: <img className="w-full" src="img/card1.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
  {
    image: <img className="w-full" src="img/card2.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
  {
    image: <img className="w-full" src="img/card3.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
  {
    image: <img className="w-full" src="img/card4.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
  {
    image: <img className="w-full" src="img/avo.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
  {
    image: <img className="w-full" src="img/card6.png" alt="" />,

    title: "UI-UX DESIGN",
    title2: "Product Admin Dashboard",

    description:
      "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
    button: (
      <button className="flex">
        {" "}
        Case Study
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
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    ),
    href: "#",
  },
];
