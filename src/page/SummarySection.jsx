import React from "react";
import profilePic from "../assets/image/summary.jpg"; // replace with your image

const SummarySection = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) text-white py-16 px-6  md:px-20">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-18">
        
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={profilePic}
            alt="Profile"
            className="w-100 h-80 object-cover rounded-2xl shadow-[10px_10px_40px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl mb-2 md:text-4xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="w-40 h-[2px] bg-gradient-to-r from-[#03A9F4] to-[#4CAF50] mx-auto md:mx-0 mt-2 mb-6"></div>

          <p className="text-[#96B1C0] text-lg leading-relaxed poppins-thin mb-6">
            I began my career as a Graphic Designer and 2D Animator,
            and through consistent dedication and performance, I was promoted to
            UI Designer. Over the years, I have successfully transitioned into
            UI/UX design, delivering end-to-end solutions for multiple products
            across diverse industries.
          </p>

          <p className="text-[#96B1C0] text-lg leading-relaxed poppins-thin">
            Currently, I am working as a UI/UX Manager at BigCash,
            where I lead design for both global and India live projects,
            ensuring seamless user experiences and design excellence.
          </p>
        </div>
      </div>

      
    </section>
  );
};

export default SummarySection;
