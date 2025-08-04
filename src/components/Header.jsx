import { IoIosBookmarks } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const goBlogPage = () => {
    setMenuOpen(false);
    navigate("/BlogPage");
  };
  // go back home
  const gotoHome = () => {
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="relative z-100 sm:w-full md:max-w-5xl w-full mx-auto px-7 py-4 mt-10 flex justify-between items-center border border-gray-400 rounded-full ">
      <div className="flex items-center space-x-2">
        <IoIosBookmarks className="md:size-6 size-4 fill-blue-700 transition-transform duration-200 hover:scale-110" />
        <span className="md:text-2xl text-md font-bold text-blue-700">
          CivilPrep
        </span>
      </div>
      {/* Desktop Nav */}
      <nav className="md:flex hidden md:space-x-8 space-x-2">
        <a
          href="#"
          onClick={gotoHome}
          className="text-gray-600 hover:text-blue-700 active:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 active:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Donate
        </a>
        <a
          href="#"
          onClick={goBlogPage}
          className="text-gray-600 hover:text-blue-700 active:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Blog
        </a>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 transition"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <FiMenu className="size-6" />
      </button>
      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div className="fixed  w-full inset-0 z-100 flex items-center justify-center pt-10 bg-opacity-40 md:hidden">
          <div className=" bg-white z-100 w-full h-full shadow-lg flex flex-col justify-start text-center items-center pt-8 px-6 relative animate-slide-in">
            <button
              className="absolute top-4 right-4 text-blue-700 p-2 rounded-full hover:bg-blue-100 transition"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX className="size-6" />
            </button>
            <nav className="flex flex-col space-y-6 mt-8">
              <a
                href="#"
                onClick={gotoHome}
                className="text-gray-700 text-lg font-semibold hover:text-blue-700 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 text-lg font-semibold hover:text-blue-700 transition"
              >
                Donate
              </a>
              <a
                href="#"
                onClick={goBlogPage}
                className="text-gray-700 text-lg font-semibold hover:text-blue-700 transition"
              >
                Blog
              </a>
            </nav>
          </div>
          {/* Click outside to close */}
          <div
            className="flex-1 h-full"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          ></div>
        </div>
      )}
    </header>
  );
};

export default Header;
