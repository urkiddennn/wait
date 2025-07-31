import PropTypes from "prop-types";
import { AiFillClockCircle } from "react-icons/ai";

const FeatureCard = ({
  icon: Icon = AiFillClockCircle,
  title,
  listItems = [],
  iconBg, // Expect a valid CSS color (e.g., 'red', '#ff0000', etc.)
  iconColor = "indigo", // Expect a valid CSS color
}) => {
  return (
    <div
      className="flex flex-col justify-start items-start p-4 border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${title}`}
    >
      <div
        style={{ backgroundColor: iconBg }}
        className="p-3 rounded-md transform group-hover:scale-110 transition-transform duration-200"
      >
        <Icon
          style={{ color: iconColor }}
          className="size-8 group-hover:animate-pulse"
          aria-hidden="true"
        />
      </div>
      <h1 className="text-xl font-bold mt-4 text-gray-800">{title}</h1>
      <ul className="mt-3 space-y-2 text-gray-600">
        {listItems.map((item, index) => (
          <li
            key={index}
            className="flex items-start text-sm before:content-['\2022'] before:mr-2 before:text-indigo-500 before:font-bold before:text-lg"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.string),
  iconBg: PropTypes.string,
  iconColor: PropTypes.string,
};

export default FeatureCard;
