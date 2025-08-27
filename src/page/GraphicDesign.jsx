import React from "react";
import { ChevronRight, PenTool } from "lucide-react";

import box from '../assets/Ashwani (2)/box.png'

const links = [
  { label: "View Logo Design", href: "#", },
  { label: "Ohmkara PPT design", href: "#" },
  { label: "Linengrass PPT Design", href: "#", },
  { label: "Social Media Design", href: "#", },
  { label: "Infographic Design", href: "#" },
];

const GraphicDesign = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-16 mb-[15px] pl-[127px]">

      {/* Left Icon */}
      {/* <PenTool className="absolute top-6 left-10 text-cyan-400 w-16 h-16 opacity-80" /> */}
      <div>
        <img src={box} alt="Graphic Design" className="w-28 h-28 absolute top-1/4 left-[80px] z-10 " />
      </div>
      {/* Heading */}
      <div className="w-5xl relative h-[500px] bg-white/10 backdrop-blur-xl rounded-tl-[200px] rounded-bl-2xl p-[60px] mt-[100px] overflow-hidden">

        <h2 className="text-4xl md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent p-5">
          Graphic design
        </h2>

        {/* Description */}
        <p className="mt-4 poppins-thin text-xl ml-[25px] text-[#cadfeb]">
          Nowadays, simple thinking is the best practice. Users are shifting towards
          flat colors and flat design, which are now widely used everywhere.
        </p>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 space-y-7 gap-6 mt-10 ml-[25px]">
          {links.map((item, idx) => (
            <div className="flex items-center" key={idx}>
              <a
                href={item.href}
                className=" poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent font-semibold flex items-center text-xl underline decoration-[#0084ff]"
              >
              {item.label} 

            </a>
              <ChevronRight className="h-7 w-7 ml-4 text-[#0084ff] " />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
