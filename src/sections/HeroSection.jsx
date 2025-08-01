import InputEmail from "../components/InputEmail";

import { useState, useEffect } from "react";
import { getTotalJoined } from "../services/api";

const HeroSection = ({ onJoined }) => {
  const [totalJoined, setTotalJoined] = useState(0);

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

  return (
    <div>
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
        <InputEmail onJoined={onJoined} />
      </main>
    </div>
  );
};

export default HeroSection;
