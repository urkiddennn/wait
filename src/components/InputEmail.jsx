// frontend/InputEmail.jsx
import { useState, useEffect } from "react";
import {
  joinWaitlist,
  verifyDeviceToken,
  deleteDeviceToken,
} from "../services/api.jsx";

const InputEmail = ({ onJoined }) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkJoinStatus = async () => {
      const token = localStorage.getItem("waitlistToken");
      if (token) {
        try {
          const hasJoined = await verifyDeviceToken(token);
          console.log("Verify device token result:", hasJoined); // Debug log
          setHasJoined(hasJoined);
        } catch (err) {
          console.error("Error verifying token:", err.message);
          setError(err.message || "Failed to verify join status");
        }
      } else {
        console.log("No token found in localStorage"); // Debug log
      }
    };
    checkJoinStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (hasJoined) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await joinWaitlist(email);
      console.log("Join waitlist response:", response); // Debug log
      localStorage.setItem("waitlistToken", response.data.deviceToken);
      setHasJoined(true);
      setEmail("");
      if (typeof onJoined === "function") {
        onJoined();
      }
    } catch (err) {
      console.error("Join waitlist error:", err.message);
      setError(err.message || "Failed to join waitlist");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteToken = async () => {
    const token = localStorage.getItem("waitlistToken");
    if (!token) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await deleteDeviceToken(token);
      console.log("Delete token response:", response); // Debug log
      localStorage.removeItem("waitlistToken");
      setHasJoined(false);
    } catch (err) {
      console.error("Delete token error:", err.message);
      setError(err.message || "Failed to delete token");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full max-w-lg p-2 h-16 rounded-full justify-center border border-gray-200"
      >
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full p-4 rounded-l h-full bg-gray-50 opacity-60 text-gray-800 outline-none text-lg transition duration-200 ease-in-out placeholder-gray-500"
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading || hasJoined}
        />
        <button
          type="submit"
          className="btn px-8 py-4 h-full bg-blue-500 text-white border-none font-bold rounded-full hover:bg-blue-700"
        >
          {hasJoined ? "Joined" : "Join the Waitlist"}
        </button>
      </form>
      {/* {hasJoined && (
        <button
          onClick={handleDeleteToken}
          className="mt-4 px-4 py-2 bg-red-500 text-white border-none font-bold rounded hover:bg-red-700"
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Reset Join Status (Test)"}
        </button>
      )} */}

      {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
    </>
  );
};

export default InputEmail;
