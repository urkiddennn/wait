import React, { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import { PiRobotFill } from "react-icons/pi";
import InputEmail from "./components/InputEmail";
import ChatModal from "./components/ChatModal";
import { getTotalJoined } from "./services/api";
import Header from "./components/Header";
import FeatureSection from "./sections/FeatureSection";
import { IoIosBookmarks } from "react-icons/io";

const App = () => {
  const [totalJoined, setTotalJoined] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [joined, setJoined] = useState(false);

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

  useEffect(() => {
    if (joined) {
      const timer = setTimeout(() => setJoined(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [joined]);

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
      <Header />
      {/* Main Content Area - Waitlist Focused */}
      <main className="relative max-w-5xl z-10 flex flex-col items-center justify-center flex-grow text-center px-4 py-16">
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

        <div className="flex flex-col justify-center items-center gap-2">
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
          <div className="text-blue-300 font-semibold text-md">
            people are wating...
          </div>
        </div>
        <br />

        {/* Waitlist Form */}
        <InputEmail onJoined={() => setJoined(true)} />
      </main>
      {/* The feature sections */}
      <FeatureSection />
      <footer className=" relative max-w-5xl footer sm:footer-horizontal bg-gray-950 rounded-t-xl mt-10  text-neutral-content p-10">
        <aside className="text-white">
          <IoIosBookmarks className="size-16" />
          <p>
            CivilPrep
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav className="text-white">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
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
      {joined && (
        <div
          role="alert"
          className="alert alert-success alert-outline fixed bottom-10 right-10 z-50"
        >
          <span>Your purchase has been confirmed!</span>
        </div>
      )}
    </div>
  );
};

export default App;
