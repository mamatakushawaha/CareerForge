import React from "react";
import profile from "../assets/image/profile.png";
import figma from "../assets/image/figma.png";
import ai_img from "../assets/image/ai.png";
import chat from "../assets/image/chat.png";
import ps_image from "../assets/image/ps_image.png";
import xd_img from "../assets/image/xd_img.png";
import animate from "../assets/image/an_image.png"; // if you have animate icon

const Profile = () => {
  return (
    <section className="relative bg-[radial-gradient(circle_at_top,rgba(0,128,128,0.6)_0%,transparent_50%)] text-white min-h-screen flex flex-col md:flex-row items-center justify-center gap-2 px-6 md:px-16">

      {/* Left Section  className="absolute top-[120px] left-[60px] border-4 border-amber-400 "*/}
      <div className="absolute top-[130px] left-[80px]" >
        <div className="flex gap-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span role="img" aria-label="wave">👋</span>
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#96B1C0]">Hello, I am </span>
              <span className="text-[#96B1C0]"> Ashwani Tyagi</span>
            </h1>
            <p className="text-xl font-normal mt-1 bg-gradient-to-b from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
              +91 8130903238
            </p>
          </div>
        </div>

        {/* Title */}
        <div className=" mt-8 p-4 text-left lg:pl-16">
          <h2 className="text-4xl p-2 md:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
            <span>UI/UX</span>{" "}
            <span>Designer</span>
          </h2>
          <div className="w-11 h-1 font-bold bg-gradient-to-r from-[#81ff9f] to-[#0084ff] ml-3 mt-1"></div>
        </div>

        {/* Tools */}
        
      </div>
      <div className="mt-4 absolute left-1/7 top-2/3 transform -translate-y-1/2 flex   justify-center md:justify-start gap-6 p-5 lg: space-x-6
                        bg-white/15 backdrop-blur-2xl rounded-2xl shadow-xl ">
          <div className="flex flex-col items-center">
            <img src={figma} alt="Figma" className="w-12 h-12 rounded-xl shadow-[0_8px_20px_rgba(128,0,255,0.6)]" />
            <span className="text-sm text-[#96b1c0] mt-3">Figma</span>
          </div>

          <div className="flex flex-col items-center">
            <img src={xd_img} alt="XD" className="w-12 h-12 rounded-xl shadow-[0_8px_20px_rgba(255,0,150,0.6)]" />
            <span className="text-sm text-[#96b1c0] mt-3">XD</span>
          </div>

          <div className="flex flex-col items-center">
            <img src={ai_img} alt="Illustrator" className="w-12 h-12 rounded-xl shadow-[0_8px_20px_rgba(255,255,0,0.6)] " />
            <span className="text-sm text-[#96b1c0] mt-3">Illustrator</span>
          </div>

          <div className="flex flex-col items-center">
            <img src={ps_image} alt="Photoshop" className="w-12 h-12 rounded-xl shadow-[0_8px_20px_rgba(0,200,255,0.6)] " />
            <span className="text-sm mt-3 text-[#96b1c0]">Photoshop</span>
          </div>

          <div className="flex flex-col items-center">
            <img src={animate} alt="Animate" className="w-12 h-12 rounded-xl  shadow-[0_8px_20px_rgba(0,132,255,0.6)]" />
            <span className="text-sm mt-3 text-[#96b1c0]">Animate</span>
          </div>

          <div className="flex flex-col items-center">
            <img src={chat} alt="ChatGPT" className="w-12 h-12 rounded-xl shadow-[0_8px_20px_rgba(0,255,100,0.6)]" />
            <span className="text-sm mt-3 text-[#96b1c0]">ChatGPT</span>
          </div>
        </div>

      {/* Right Section - Profile Image absolute right-[50px] */}
      <div className=" absolute right-[20px]  flex-1   mt-8 md:mt-0">
        <img
          src={profile}
          alt="Profile"
          className="rounded-2xl shadow-lg max-h-[520px] object-cover "
        />
      </div>
    </section>
  );
};

export default Profile;
