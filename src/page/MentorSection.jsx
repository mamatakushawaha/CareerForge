import React from "react";
import { Linkedin } from "lucide-react"; // Lucide icon
import mentor1 from "../assets/image/mentor1.png"; // replace with your image
import mentor2 from "../assets/image/mentor2.png"; // replace with your image
import massco from "../assets/Ashwani (2)/massco.png" // replace with your image  
import apple from "../assets/Ashwani (2)/apple.png" // replace with your image
const mentors = [
  {
    name: "Bhusan Verma",
    title: "‘Mentor’ Bhusan Sir",
    description:
      "Bhushan Verma, based in Delhi, India, is currently a Founder and C.E.O at GearCraftSolutions, (a creative design hub). Bhushan Verma brings experience from previous roles at IVS School Of Design, MassCoMedia, Technology 9 Labs and Netcradle India Pvt Ltd. Bhushan Verma holds a 1997 - 1998 +2 in Commerce @ ASVJ. Sr. Sec. School. With a robust skill set that includes Animation, Maya, Storyboarding, Computer Animation, Character Animation and more",
    img: mentor2,
    linkedin: "https://www.linkedin.com/in/bhushan-verma-038a71a/",
  },
  {
    name: "Vinay Vikaram Singh",
    title: "‘Mentor’ Vinay Vikaram Singh",
    description:
      "A creative learner and founder @twinbrains in the field of CGI for advertising, Animation and Gaming over the past 18+ years.",
    img: mentor1,
    linkedin: "https://www.linkedin.com/in/vsvinayvikram/?originalSubdomain=in",
  },
];

const MentorSection = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-12 mb-[15px] pl-[127px]">
      <div className="relative  flex items-center justify-around gap-2">
        {/* Left Logo */}
        <div className="w-[150px] p-2  ">
          <img
            src={massco}
            alt="MassCo"
            className="w-[120px] h-[120px] object-contain bg-white rounded-2xl shadow-xl p-3"
          />
        </div>

        {/* Right Content */}
        <div className="flex w-[700px] flex-col p-4 space-y-4">
          {/* Heading */}
          <h1 className="text-4xl p-5 md:text-5xl poppins-thin font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
            <span >Motion artist</span> &{" "}
            <span >Design thinking diploma</span>
          </h1>

          {/* Description */}
          <p className="text-[#cadfeb] text-lg  poppins-thin font-light leading-relaxed">
            Completed 1 year of dedicated (9 hours daily) learning under India’s
            Top 10 Design Thinking Experts
          </p>


        </div>

        {/* Apple Icon (right side) */}
        <div className="absolute right-20 top-[240px] ">
          <img src={apple} alt="Apple Icon" className="w-18 h-18" />
        </div>

      </div>


      <div className="w-5xl relative h-[550px] bg-white/10 backdrop-blur-xl rounded-tl-[200px] rounded-bl-2xl p-[30px] mt-[100px] overflow-hidden">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex  flex-col md:flex-row items-center gap-8 relative mb-16"
          >
            {/* Profile Image (floating left) */}
            <div className="absolute top-1/2 -translate-y-1/2 z-10">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-40  z-100 h-40 rounded-full object-cover border-2 border-white shadow-[10px_10px_40px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Mentor Info */}
            <div className="ml-[200px] text-left">
              <h2 className="text-2xl md:text-4xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
                {mentor.title}
              </h2>
              <p className="mt-4 text-[#cadfeb] leading-relaxed poppins-thin text-lg max-w-3xl">
                {mentor.description}
              </p>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#03A9F4] hover:underline"
              >
                <Linkedin className="w-5 h-5" />
                Linkedin Profile
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MentorSection;
