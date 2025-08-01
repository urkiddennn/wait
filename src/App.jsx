import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PiRobotFill } from "react-icons/pi";

import ChatModal from "./components/ChatModal";

import Header from "./components/Header";
import FeatureSection from "./sections/FeatureSection";

import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/HeroSection";
import BlogPage from "./sections/pages/BlogPage";

const LandingPage = ({ onJoined }) => (
  <>
    {/* Navigation Bar */}
    <Header />
    {/* Main Content Area - Waitlist Focused */}
    <HeroSection onJoined={onJoined} />
    <br />
    <br />
    <br />
    {/* The feature sections */}
    <FeatureSection />
    {/* Footer section*/}
    <FooterSection />
  </>
);

const App = () => {
  const [joined, setJoined] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Handle alert timer here
  useEffect(() => {
    if (joined) {
      const timer = setTimeout(() => setJoined(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [joined]);

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
      <Routes>
        <Route
          path="/"
          element={<LandingPage onJoined={() => setJoined(true)} />}
        />
        <Route path="/BlogPage" element={<BlogPage />} />
        {/* Add more routes here as needed */}
      </Routes>
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
