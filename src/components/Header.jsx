import { IoIosBookmarks } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const goBlogPage = () => {
    navigate("/BlogPage");
  };
  return (
    <header className="relative z-10 sm:w-full md:max-w-5xl w-80 mx-auto px-7 py-4 mt-10 flex justify-between items-center border border-gray-400 rounded-full">
      <div className="flex items-center space-x-2">
        <IoIosBookmarks className="md:size-6 size-4 fill-blue-700 transition-transform duration-200 hover:scale-110" />
        <span className="md:text-2xl text-md font-bold text-blue-700">
          CivilPrep
        </span>
      </div>
      <nav className="md:space-x-8 space-x-2">
        <a
          href="#"
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
    </header>
  );
};

export default Header;
