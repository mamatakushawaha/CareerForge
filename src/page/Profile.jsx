// src/components/Hero.jsx
import {
  Figma,
  PenTool,        // Illustrator
  Image,           // Photoshop
  MonitorPlay,     // Animate
  Bot,             // ChatGPT
  AppWindow        // XD
} from "lucide-react";
import profile from "../assets/image/profile.png";

const Profile = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
      
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-2">
          <span role="img" aria-label="wave" >👋</span> <span className="text-[#96B1C0]">Hello, I am </span> 
          <span className="text-[#96B1C0]"> Ashwani Tyagi</span>
        </h1>
        <p className="text-lg text-cyan-400">+91 8130903238</p>
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-500">
          UI/UX Designer
        </h2>

        {/* Tools */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-6 bg-gray-800/60 p-4 rounded-xl backdrop-blur">
          
          <div className="flex flex-col items-center">
            <Figma className="w-12 h-12 text-pink-500" />
            <span className="text-sm mt-2">Figma</span>
          </div>

          <div className="flex flex-col items-center">
            <AppWindow className="w-12 h-12 text-pink-400" />
            <span className="text-sm mt-2">XD</span>
          </div>

          <div className="flex flex-col items-center">
            <PenTool className="w-12 h-12 text-yellow-500" />
            <span className="text-sm mt-2">Illustrator</span>
          </div>

          <div className="flex flex-col items-center">
            <Image className="w-12 h-12 text-blue-400" />
            <span className="text-sm mt-2">Photoshop</span>
          </div>

          <div className="flex flex-col items-center">
            <MonitorPlay className="w-12 h-12 text-purple-400" />
            <span className="text-sm mt-2">Animate</span>
          </div>

          <div className="flex flex-col items-center">
            <Bot className="w-12 h-12 text-green-400" />
            <span className="text-sm mt-2">ChatGPT</span>
          </div>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src={profile}   
          alt="Profile"
          className="rounded-2xl shadow-lg max-h-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default Profile;
