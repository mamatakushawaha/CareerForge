import React from "react";
import { ChevronRight, PenTool } from "lucide-react";

import box from '../assets/Ashwani (2)/pen.png'

const links = [
  { label: "BigCash App Design", href: "https://www.figma.com/design/PWq1oRgQqjIHJapYUqS8tY/BigCash-App-Design--Copy-?t=hFZvaodBYrzlZQnd-0", },
  { label: "School App for Teacher ", href: "https://www.figma.com/design/pNEzvw6HrOuiRBLp0agl1P/Teacher-App-Final--V01--Copy-?node-id=0-1&p=f&t=vtI2hse6VkfSFPXl-0" },
  { label: "Parent App", href: "https://www.figma.com/design/kDWQgTHYBayeAPGMUgewUo/Parent-App?t=5iBPoRQmoL39U6CY-0" },
  { label: "E Commerce Website", href: "https://www.figma.com/design/T4LhXbEsJJBWWWhjzRevMo/e-commerce-Website?node-id=0-1&t=vTsWGZxrMfwxc2h2-0" },
  {label:"Social Media App",href:"https://www.figma.com/design/poDiTPTCNTq5uXuKdF2Qfa/UI-Update--8-Jan-2023?node-id=0-1&p=f&t=Lg5FxpwOFdpXXar5-0"},
  {label:"User experience",href:"https://drive.google.com/file/d/1q-6GZVDrqaXQJyvpAqhIi-1a6KsrlKne/view"},

  { label: "Ziploan UX Improvement", href: "https://drive.google.com/file/d/17tgup1GVXz95TTln_QCJushg200q53bt/view" },
  {label:"Planpie UI/UX",href:"https://www.figma.com/design/IPYsDMwCCQAVKL9Tbeg8xr/Planpie-V2--Copy-?node-id=0-1&t=SCE8G7a4aQHFCsSH-1&fuid=1413793920570971097"},
];

const Ui_page = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white  pl-[127px]">

      {/* Left Icon */}
      {/* <PenTool className="absolute top-6 left-10 text-cyan-400 w-16 h-16 opacity-80" /> */}
      <div>
        <img src={box} alt="Graphic Design" className="w-26 h-26 absolute top-7 left-[100px] z-10 " />
      </div>
      {/* Heading */}
      <div className="w-5xl relative h-[550px] bg-white/10 backdrop-blur-xl rounded-tl-[200px] rounded-bl-2xl p-[60px] mt-[100px] overflow-hidden">

        <h2 className="text-4xl md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent p-5">
         UI/UX Design
        </h2>

        {/* Description */}
        <p className="mt-4 poppins-thin text-xl ml-[25px] text-[#cadfeb]">
          Focuses on the look and feel of a product — colors, typography, buttons, layouts, and overall visual design. Focuses on usability, accessibility, and how smoothly users can interact with the product to achieve their goals.
        </p>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 space-y-5 gap-7 mt-10 p-4">
          {links.map((item, idx) => (
            <div className="flex items-center" key={idx}>
              <a
                href={item.href}
                className=" poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent font-semibold flex items-center text-xl underline decoration-[#0084ff]"
              >
              {item.label} 

            </a>
              <ChevronRight className="h-7 w-7 ml-2 text-[#0084ff] " />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ui_page;
