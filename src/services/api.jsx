// frontend/services/api.jsx
import axios from "axios";

const API_URL = import.meta.env.VITE_API_SAVE_EMAIL;

if (!API_URL) {
  console.error(
    "VITE_API_SAVE_EMAIL is not defined in .env file. Please set VITE_API_SAVE_EMAIL=http://localhost:3000/api/waitlist",
  );
}

export const joinWaitlist = async (email) => {
  if (!API_URL) {
    throw new Error("API URL is not configured. Please check your .env file.");
  }
  try {
    const response = await axios.post(`${API_URL}/api/waitlist`, { email });
    console.log("Join waitlist full response:", response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error(
      "Join waitlist error:",
      error.response?.data || error.message,
    );
    throw new Error(error.response?.data?.error || "Failed to join waitlist");
  }
};

export const verifyDeviceToken = async (token) => {
  if (!API_URL) {
    throw new Error("API URL is not configured. Please check your .env file.");
  }
  try {
    const response = await axios.post(`${API_URL}/api/waitlist/verify-token`, {
      token,
    });
    console.log("Full verify token response:", response.data); // Debug log
    return response.data.data.hasJoined;
  } catch (error) {
    console.error("Verify token error:", error.response?.data || error.message);
    if (
      error.response?.status === 400 ||
      error.response?.status === 401 ||
      error.response?.status === 404
    ) {
      localStorage.removeItem("waitlistToken"); // Clear invalid token
    }
    throw new Error(error.response?.data?.error || "Failed to verify token");
  }
};

export const deleteDeviceToken = async (token) => {
  if (!API_URL) {
    throw new Error("API URL is not configured. Please check your .env file.");
  }
  try {
    const response = await axios.post(`${API_URL}/api/waitlist/delete-token`, {
      token,
    });
    console.log("Delete token response:", response.data); // Debug log
    return response.data;
  } catch (error) {
    console.error("Delete token error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Failed to delete token");
  }
};

export const getTotalJoined = async () => {
  if (!API_URL) {
    throw new Error("API URL is not configured. Please check your .env file.");
  }
  try {
    const response = await axios.get(`${API_URL}/api/waitlist/getAllEmail`);
    console.log("Total Emails: ", response.data.data.totalEmails); // Debug log
    return response.data.data.totalEmails; // Extract the 'totalEmails' field from the 'data' object
  } catch (error) {
    console.error("Get total error: ", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Failed to get data");
  }
};

export const sendChatMessage = async (message) => {
  if (!API_URL) {
    throw new Error("API URL is not configured. Please check your .env file.");
  }
  try {
    const response = await axios.post(`${API_URL}/agent/chat`, {
      message,
    });
    console.log("Chat response:", response.data); // Debug log
    return response.data.response; // Return the AI's response content
  } catch (error) {
    console.error("Chat error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.error || "Failed to send message");
  }
};
