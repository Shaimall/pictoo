import React from "react";
import Nav from "../components/Nav";
import { Card, Card2 } from "../components/Card";

export default function Home() {
  return (
    <div>
      {/* <Nav /> */}
      <header className="bg-gradient-to-r to-[#DA4DF1] from-white relative ">
        <section>
          <div className=" grid md:grid-cols-2 lg:px-20 md:px-10 gap-2  py-20">
            <div className="">
              <h className="lg:text-5xl md:text-3xl leading-normal font-bold text-5xl ">
                Hello, I’m<br></br> Brooklyn Gilbert
              </h>
              <p className="md:text-base mt-8 container xl:pr-36 text-2xl">
                I'm a Freelance UI/UX Designer and Developer based in London,
                England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric
                design.
              </p>
              <button className="bg-[#A53DFF]  mt-6 rounded-md px-4 py-2 text-xs text-white ">
                {" "}
                Say Hello!
              </button>
              <div className="grid grid-cols-3 gap-1 text-center py-4 lg:mt-48 md:mt-14 xl:mt-64">
                <div className="bg-[#EDD8FF] py-4 rounded-md ">
                  <h className="text-lg font-bold">15 Y.</h>
                  <p className="text-xs"> Experience</p>
                </div>
                <div className="bg-[#EDD8FF] py-4 rounded-md  ">
                  <h className="text-lg font-bold">250+</h>
                  <p className="text-xs "> Projects Completed</p>
                </div>
                <div className="bg-[#EDD8FF] py-4 rounded-md">
                  <h className="text-lg font-bold">58</h>
                  <p className="text-xs "> Happy Client</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <img className="rounded-2xl  " src="img/man1.jpeg" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white mx-auto w-12 ">
            <div className="grid grid-cols-2">
              <div></div>
            </div>
          </div>
        </section>
      </header>
      {/* <section className=" bg-slate-400 ">
        <div className="grid grid-cols-2 container mx-auto pt-40 pb-24">
          <div className=" container px-36 py-16 mt-60">
            <h className=" text-2xl"> Work Process</h>
            <p className="text-base mt-5">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <p className="text-base mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-28 gap-9 rounded-lg ">
            {CARD.map((item, i) => (
              <Card {...item} key={i} />
            ))}
          </div>
        </div>
      </section> */}
      {/* <section>
        <h className="w-screen flex justify-center mt-8 text-4xl">Portfolio</h>
        <p className="w-screen flex justify-center mt-7">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-3">
          {CARD2.map((item, i) => (
            <Card2 {...item} key={i} />
          ))}
        </div>
      </section> */}
    </div>
  );
}

const CARD = [
  {
    icon: (
      <svg
        className="w-16"
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),

    title: "1.Research",

    description:
      "Scenester PBR deep v jean shorts typewriter. Sustainable keytar Tumblr, authentic mustache locavore scenester gentrify meh banjo fanny pack health goth. Four dollar toast",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-16"
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),

    title: "2. Analyze",

    description:
      "Pickled 8-bit tousled health goth farm-to-table Pitchfork, lumbersexual church-key photo booth Blue Bottle. Aesthetic viral American Apparel, scenester distillery",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-16"
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
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),

    title: "2. Design",

    description:
      "Cliche Intelligentsia church-key, gluten-free drinking vinegar keffiyeh cornhole next level shabby chic plaid tattooed. Helvetica post-ironic raw denim tousled listicle.",
    href: "#",
  },
  {
    icon: (
      <svg
        className="w-16"
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
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    ),

    title: "4.Launch",

    description:
      "Raw denim health goth artisan, kitsch literally shabby chic meh small batch Wes Anderson retro Neutra. Blog meggings semiotics, irony swag cred kale chips aesthetic",
    href: "#",
  },
];

// const CARD2 = [
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",
//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",
//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",
//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",
//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",

//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
//   {
//     image: <img className="" src="img/card1.png" alt="" />,

//     title: "UI-UX DESIGN",
//     title2: "Product Admin Dashboard",

//     description:
//       "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
//     button: (
//       <button className="flex">
//         {" "}
//         Case Study
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           class="w-6 h-6"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
//           />
//         </svg>
//       </button>
//     ),
//     href: "#",
//   },
// ];
