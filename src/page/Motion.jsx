import React from "react";
import { ChevronRight, PenTool } from "lucide-react";

import box from '../assets/Ashwani (2)/setting.png'



const Motion = () => {
    return (
        <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-12 mb-[45px] pl-[127px]">

            {/* Left Icon */}
            {/* <PenTool className="absolute top-6 left-10 text-cyan-400 w-16 h-16 opacity-80" /> */}
            <div>
                <img src={box} alt="Graphic Design" className="w-26 h-26 absolute top-1/4 left-[90px] z-10 " />
            </div>
            {/* Heading */}
            <div className="w-5xl relative h-[570px] bg-white/10 backdrop-blur-xl space-y-6 rounded-tl-[200px] rounded-bl-2xl p-[60px] mt-[100px] overflow-hidden">

                <h2 className="text-4xl md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent p-5">
                    Motion Graphic
                </h2>

                {/* Description */}
                <p className="mt-4 poppins-thin text-xl ml-[25px] text-[#cadfeb]">
                    Proficient in creating motion graphics that bring ideas to life through engaging animations and visuals. Experienced in designing animated elements for apps, websites, and marketing campaigns to enhance user experience, communicate concepts clearly, and align with brand identity
                </p>

                <div className="flex gap-3 p-5">
                    <div>
                        <a href="#" className="poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent font-semibold flex items-center text-2xl underline decoration-[#0084ff]">Explainer video_01</a>
                    </div>
                    <ChevronRight className="h-7 w-7 ml-2 text-[#0084ff] " />

                </div>
                <div>
                    <p className="poppins-thin text-[#cadfeb] ml-[25px] text-xl">Managed motion graphic videos for ExtraClass and contributed to the creation of explainer videos, available on the company’s YouTube channel.</p>
                </div>
                <div className="flex gap-3 p-5">
                    
                    <div>
                        <a href="#" className="poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent font-semibold flex items-center text-2xl underline decoration-[#0084ff]">Check Youtube channel</a>
                    </div>
                    <ChevronRight className="h-7 w-7 ml-2 text-[#0084ff] " />
                </div>
            </div>
        </section>
    );
};

export default Motion;
