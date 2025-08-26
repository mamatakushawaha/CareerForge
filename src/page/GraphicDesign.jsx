import React from "react";
import { PenTool } from "lucide-react";

const links = [
  { label: "View Logo Design", href: "#", color: "text-green-400" },
  { label: "Ohmkara PPT design", href: "#", color: "text-cyan-400" },
  { label: "Linengrass PPT Design", href: "#", color: "text-cyan-400" },
  { label: "Social Media Design", href: "#", color: "text-green-400" },
  { label: "Infographic Design", href: "#", color: "text-cyan-400" },
];

const GraphicDesign = () => {
  return (
    <section className="bg-gradient-to-r from-[#001b24] to-[#0c2a3b] text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Left Icon */}
      <PenTool className="absolute top-6 left-10 text-cyan-400 w-16 h-16 opacity-80" />

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
        Graphic design
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-lg text-gray-300">
        Nowadays, simple thinking is the best practice. Users are shifting towards
        flat colors and flat design, which are now widely used everywhere.
      </p>

      {/* Links Grid */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {links.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className={`${item.color} font-semibold flex items-center text-lg hover:underline`}
          >
            {item.label}
            <span className="ml-2">➜</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GraphicDesign;
