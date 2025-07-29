import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { sendChatMessage } from "../services/api.jsx"; // Import the new function

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! How can I help you prepare for the Civil Service Exam today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    // Add user message to the chat
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput(""); // Clear input field
    setIsLoading(true);

    try {
      // Send message using the API function
      const aiResponse = await sendChatMessage(input);
      // Add AI response to the chat
      setMessages([...newMessages, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      // Handle error response
      setMessages([
        ...newMessages,
        { role: "assistant", content: `Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press to send message
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-24 right-8 z-50 w-80 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-blue-700">civ.ai chat</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <IoCloseOutline className="size-6" />
        </button>
      </div>
      <div
        className="flex-grow p-4 overflow-y-auto"
        style={{ maxHeight: "300px" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`text-sm p-2 rounded-lg my-2 max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-100 self-start ml-auto"
                : "bg-gray-100 self-end"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="text-sm text-gray-500 italic">Typing...</div>
        )}
      </div>
      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
