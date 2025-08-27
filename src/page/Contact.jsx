import React from "react";
import { Mail, Phone } from "lucide-react"; // optional icons
import profileImg from "../assets/image/profile.png"; // replace with your image

const Contact=()=> {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-16 mb-[20px] pl-[127px]">
      <div className="max-w-6xl mx-auto flex gap-5 items-center ">

        {/* Left - Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={profileImg}
            alt="Profile"
            className="w-[320px] md:w-[450px] drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-8">
          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent  ">
              Thank you! <br />
             
              <span className="text-2xl md:text-4xl font-bold  poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent ">
                Feel free to reach out to me
              </span>
               <span className="block w-10 h-[3px] rounded-full mt-2 bg-gradient-to-r from-[#81ff9f] to-[#0084ff] mb-3"></span>

            </h2>
          </div>

          {/* Email */}
          <div>
            
            <p className="text-lg poppins-thin text-[#cadfeb]">ashwaniofficial39@gmail.com</p>
            <span className="poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent text-xl">Email ID</span>
          </div>

          {/* Phone */}
          <div>
            <p className="text-lg poppins-thin text-[#cadfeb]">+91 8130 90 3238</p>
            <span className="poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent text-xl">Contact</span>
          </div>

          {/* Quote */}
          <div className="bg-white/10 w-[450px] px-6 py-6 poppins-thin text-xl rounded-lg text-[#cadfeb] italic  ">
            “Good design is obvious. Great design is transparent.” – Joe Sparano
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
