import React from "react";
import { Briefcase } from "lucide-react"; // fallback icon if no logo

const experiences = [
  {
    id: 1,
    role: "UI/UX Manager",
    company: "Witzeal Technologies Pvt. Ltd",
    duration: "Dec 2024 - Present",
    time: "9 mos",
    logo: "/logos/witzeal.png", // replace with your image
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Witzeal Technologies Pvt. Ltd",
    duration: "Dec 2021 - Dec 2024",
    time: "3 yrs 1 mos",
    logo: "/logos/bigcash.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  },
  {
    id: 3,
    role: "UI/UX Designer",
    company: "Extraclass",
    duration: "Dec 2019 - Dec 2021",
    time: "2 yrs",
    logo: "/logos/extraclass.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  },

  {
    id: 4,
    role: "2d Motion & Graphic Designer Lead",
    company: "Selfstudy",
    duration: "Dec 2015 - Dec 2021",
    time: "6 yrs 5 mos",
    logo: "/logos/freelance.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  },
  {
    id: 5,
    role: "2d Motion & Graphic Designer",
    company: "BXI design",
    duration: "Dec 2013 - Dec 2015",
    time: "1 yr 11 mos",
    logo: "/logos/freelance.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]   bg-clip-text text-transparent",
  },
  {
    id: 6,
    role: "2d Animator & Graphics",
    company: "S.Chand Harcourt(India) Pvt.Ltd.",
    duration: "Aug 2010 - Sep 2023",
    time: "3 yr 3mos",
    logo: "/logos/freelance.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  },
  {
    id: 7,
    role: "Concept Graphic Designer",
    company: "Mabbit Communications Pvt.Ltd.",
    duration: "Aug 2009 - Jul 2010",
    time: "1 yr",
    logo: "/logos/freelance.png",
    highlight: "bg-gradient-to-r from-[#81ff9f] to-[#0084ff]  bg-clip-text text-transparent",
  }
];

const CareerJourney = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) text-white py-16 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-4xl text-[#96b1c0] font-bold poppins-thin">
          Career Journey{" "}
          
        </h2>
        <h1><span className=" bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent text-4xl lg:text-8xl poppins-thin font-bold">15+ Yrs</span></h1>
        <p className="text-[#96b1c0] mt-2 text-4xl  poppins-thin">Industry Experience</p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-16">
      {experiences.map((exp, idx) => (
          <div
            key={exp.id}
            className={`flex items-center gap-6 md:w-1/2 ${
              idx % 2 === 0
                ? "md:flex-row md:self-start"
                : "md:flex-row-reverse md:self-end"
            }`}
          >
            {/* Logo / Icon */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center shadow-[6px_6px_20px_rgba(0,132,255,0.5)] hover:scale-105 transition-transform">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Briefcase className="w-10 h-10 text-gray-400" />
              )}
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${exp.highlight}`}>
                {exp.role}
              </h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-1">
                {exp.duration} •{" "}
                <span className="text-green-400">{exp.time}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default CareerJourney;
