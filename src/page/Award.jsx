import React from "react";
import aero from "../assets/Ashwani (2)/aero.png";
import trophy from "../assets/Ashwani (2)/trophy.png";
import award from "../assets/Ashwani (2)/award.png";

const awards = [
  "Awarded ‘Best Creative of the Year’ for outstanding design and innovation",
  "Awarded for outstanding performance on a quarterly basis",
  "Winner of the BigCash UI/UX Revamp Competition for delivering innovative and user-centric design solutions",
];

const Awards = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-16 mb-[20px] pl-[127px]">
      <div>
        <img src={trophy} alt="Trophy" className="absolute top-12 left-22  z-10 w-35 h-35" />
      </div>

      <div>
        <img src={aero} alt="Trophy" className="absolute top-8 rotate-4    right-[260px] z-10 w-26 h-26 " />
      </div>
      <div className="w-5xl h-[550px] bg-white/8 backdrop-blur-xl rounded-tl-[200px]  rounded-bl-2xl p-[50px] overflow-hidden">


        {/* Heading */}
        <div className="text-center ml-10 md:text-left mb-8 p-2  ">
          <h2 className="text-4xl p-5 md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
            Awards & Winnings
          </h2>
        </div>

        {/* Content */}
        <div className="w-[420px]  p-5">
          {/* Awards List */}
          <div className=" space-y-8">
            {awards.map((award, idx) => (
              <div key={idx} className="flex flex-row gap-5 justify-around items-start">
                <div className="w-[10px]">
                <div className="w-3  h-3  rounded-full bg-gradient-to-r from-[#81ff9f] to-[#0084ff] mt-3 "></div>
                </div>
                <div className="w-[calc(100%-40px)]">
                <p className="text-xl font-light poppins-thin text-[#cadfeb] ">{award}</p>
                </div>
              </div>
            ))}
          </div>


        </div>

      </div>
      {/* Email/Certificate Card */}
      <div className=" absolute right-8 top-1/3 w-[500px] h-[420px]  text-black rounded-2xl shadow-lg overflow-hidden">
        <img src={award} alt="Trophy" className="   object-contain w-full h-full" />

      </div>
    </section>
  );
};

export default Awards;
