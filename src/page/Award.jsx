import React from "react";
import { Trophy } from "lucide-react";

const awards = [
  "Awarded ‘Best Creative of the Year’ for outstanding design and innovation",
  "Awarded for outstanding performance on a quarterly basis",
  "Winner of the BigCash UI/UX Revamp Competition for delivering innovative and user-centric design solutions",
];

const Awards = () => {
  return (
    <section className="bg-gradient(180deg,#000000_0%,#082231_33.48%) relative text-white py-16 mb-[40px] pl-[127px]">

      <div className="w-5xl h-[550px] bg-white/8 backdrop-blur-xl rounded-tl-[200px]  rounded-bl-2xl p-15  relative overflow-hidden">
        {/* Left Trophy Icon */}
        {/* <Trophy className="absolute top-5 left-25 text-green-400 opacity-70 w-16 h-16" /> */}
        {/* Right Trophy Icon */}
        <Trophy className="absolute top-6 right-10 text-cyan-400 opacity-70 w-16 h-16 rotate-12" />

        {/* Heading */}
        <div className="text-center ml-12 md:text-left mb-8 p-4 ">
          <h2 className="text-4xl md:text-5xl font-bold poppins-thin bg-gradient-to-r from-[#81ff9f] to-[#0084ff] bg-clip-text text-transparent">
            Awards & Winnings
          </h2>
        </div>

        {/* Content */}
        <div className="w-[400px] ">
          {/* Awards List */}
          <div className=" space-y-8">
            {awards.map((award, idx) => (
              <div key={idx} className="flex  gap-3">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#81ff9f] to-[#0084ff] mt-3"></div>
                <p className="text-xl font-light poppins-thin text-[#cadfeb] text-left">{award}</p>
              </div>
            ))}
          </div>

          
        </div>
        
      </div>
      {/* Email/Certificate Card */}
          <div className="bg-white absolute right-8 top-1/3 w-[450px] h-[490px]  text-black rounded-2xl shadow-lg overflow-hidden">
            <div className="p-3 border-b bg-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-700">
                BigCash UI Revamp Competition Winners & Reward Processing
              </h3>
            </div>
            <div className="p-4 text-xs space-y-4 leading-relaxed">
              <p>
                Dear Team,
                <br />
                We are excited to announce the results of the{" "}
                <span className="font-semibold">BigCash UI Revamp Competition!</span> A big
                thank you to everyone who participated and contributed their creative
                ideas to improve our platform’s user experience.
              </p>
              <p>The winners of the competition are:</p>
              <ul className="space-y-2">
                <li>🏆 <span className="font-bold">Ashwani</span> – ₹25,000</li>
                <li>🥈 Gaurav – ₹10,000</li>
                <li>🥉 Himanshu – ₹10,000</li>
              </ul>
              <p>
                Congratulations to the winners for their outstanding work and contributions!
              </p>
              <p>
                <span className="font-semibold">Action Required:</span> The HR team is kindly requested to process the rewards
                for the winners along with their February month salary. Please ensure this
                is communicated to the winners once processed.
              </p>
              <p>
                Thank you to all participants for your efforts and enthusiasm. Together, we
                continue to make BigCash even better!
              </p>
              <p className="text-left font-medium">Best regards,<br />Harshit</p>
            </div>
          </div>
    </section>
  );
};

export default Awards;
