import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import { PiRobotFill } from "react-icons/pi";
import InputEmail from "./components/InputEmail";
import ChatModal from "./components/ChatModal";
import { getTotalJoined } from "./services/api";

const App = () => {
  const [totalJoined, setTotalJoined] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const fetchTotalJoined = async () => {
      try {
        const total = await getTotalJoined();
        console.log("Total Joined: ", total);
        setTotalJoined(total);
      } catch (error) {
        console.error("Failed to fetch total joined:", error.message);
        setTotalJoined(0); // Fallback to 0 on error
      }
    };
    fetchTotalJoined();
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 overflow-hidden relative font-sans">
      {/* Grid Background Layer */}
      <div
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(200, 220, 240, 0.8) 0px, rgba(200, 220, 240, 0.8) 1px, transparent 1px, transparent 40px),
            repeating-linear-gradient(90deg, rgba(200, 220, 240, 0.8) 0px, rgba(200, 220, 240, 0.8) 1px, transparent 1px, transparent 40px)
          `,
          maskImage: `
            linear-gradient(to bottom, transparent, black 100px),
            linear-gradient(to top, transparent, black 100px),
            linear-gradient(to right, transparent, black 100px),
            linear-gradient(to left, transparent, black 100px)
          `,
          maskComposite: "intersect",
          WebkitMaskImage: `
            linear-gradient(to bottom, transparent, black 100px),
            linear-gradient(to top, transparent, black 100px),
            linear-gradient(to right, transparent, black 100px),
            linear-gradient(to left, transparent, black 100px)
          `,
          WebkitMaskComposite: "intersect",
        }}
        className="absolute inset-0 w-full h-full bg-cover z-0"
      ></div>
      {/* Navigation Bar */}
      <header className="relative z-10 sm:w-full md:max-w-4xl w-80 mx-auto px-5 py-4 mt-10 flex justify-between items-center border border-gray-400 rounded-full">
        <div className="flex items-center space-x-2">
          <IoIosBookmarks className="size-6 fill-blue-700" />
          <span className="text-2xl font-bold text-blue-700">CivilPrep</span>
        </div>
        <nav className="space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
          >
            Docs
          </a>
        </nav>
      </header>
      {/* Main Content Area - Waitlist Focused */}
      <main className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 py-16">
        <h1 className="lg:text-5xl text-3xl md:text-4xl font-extrabold text-gray-950 leading-tight mb-6 max-w-4xl">
          Your dedicated partner in mastering the{" "}
          <span className="text-blue-500 hover:text-pink-400 transition duration-200">
            📚Civil Service Exam
          </span>{" "}
          and building a successful career in public service
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl">
          Join our exclusive waitlist for early access to the definitive
          platform for mastering the Civil Service Exam.
        </p>

        <div>
          <div className="avatar-group -space-x-4">
            <div className="avatar border-white">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
              </div>
            </div>
            <div className="avatar border-white">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <div className="avatar border-white">
              <div className="w-12">
                <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
              </div>
            </div>
            <div className="avatar avatar-placeholder border-white">
              <div className="bg-neutral text-neutral-content w-12">
                <span>+{totalJoined}</span>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Waitlist Form */}
        <InputEmail />
      </main>
      <div className="max-w-4xl gap-4 flex justify-center items-center  bottom-10 opacity-60">
        <button className="bg-white shadow-xl rounded-full p-3 hover:transform hover:scale-110 hover:bg-gray-100 hover:shadow-2xl transition duration-200 ease-in-out">
          <FaFacebookF className="size-6 text-gray-500 hover:text-blue-600" />
        </button>
        <button className="bg-white shadow-xl rounded-full p-3 hover:transform hover:scale-110 hover:bg-gray-100 hover:shadow-2xl transition duration-200 ease-in-out">
          <FaXTwitter className="size-6 text-gray-500 hover:text-black" />
        </button>
        <button className="bg-white shadow-xl rounded-full p-3 hover:transform hover:scale-110 hover:bg-gray-100 hover:shadow-2xl transition duration-200 ease-in-out">
          <FaInstagram className="size-6 text-gray-500 hover:text-pink-500" />
        </button>
      </div>
      {/* Floating CIV.ai Icon */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={toggleChat}
          className="flex items-center bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 group h-12"
          aria-label="Open CIV.ai - CivilPrep AI"
        >
          <PiRobotFill className="size-7" />
          <span className="font-semibold text-lg opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all duration-300 ease-in-out">
            Open civ.ai
          </span>
        </button>
      </div>
      {/* Chat Modal Component */}
      <ChatModal isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
};

export default App;
