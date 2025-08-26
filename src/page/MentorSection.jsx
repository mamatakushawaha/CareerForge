import React from "react";
import { Linkedin } from "lucide-react"; // Lucide icon
import mentor1 from "../assets/image/mentor1.png"; // replace with your image
import mentor2 from "../assets/image/mentor2.png"; // replace with your image

const mentors = [
  {
    name: "Bhusan Verma",
    title: "‘Mentor’ Bhusan Sir",
    description:
      "Bhushan Verma, based in Delhi, India, is currently a Founder and C.E.O at GearCraftSolutions, (a creative design hub). Bhushan Verma brings experience from previous roles at IVS School Of Design, MassCoMedia, Technology 9 Labs and Netcradle India Pvt Ltd. Bhushan Verma holds a 1997 - 1998 +2 in Commerce @ ASVJ. Sr. Sec. School. With a robust skill set that includes Animation, Maya, Storyboarding, Computer Animation, Character Animation and more",
    img: mentor2,
    linkedin: "#",
  },
  {
    name: "Vinay Vikaram Singh",
    title: "‘Mentor’ Vinay Vikaram Singh",
    description:
      "A creative learner and founder @twinbrains in the field of CGI for advertising, Animation and Gaming over the past 18+ years.",
    img: mentor1,
    linkedin: "#",
  },
];

const MentorSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#001b24] to-[#0c2a3b] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={mentor.img}
                alt={mentor.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-[10px_10px_40px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Mentor Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#03A9F4]">
                {mentor.title}
              </h2>
              <p className="mt-4 text-gray-200 leading-relaxed">
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
