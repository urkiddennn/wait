import PropTypes from "prop-types";
import { AiFillClockCircle } from "react-icons/ai";

const FeatureCard = ({
  icon: Icon = AiFillClockCircle,
  title,
  description,
  iconBg, // Expect a valid CSS color (e.g., 'red', '#ff0000', etc.)
  iconColor = "indigo", // Expect a valid CSS color
}) => {
  return (
    <div
      className="h-full flex flex-col justify-between text-center items-center p-4  rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
          className="size-8 group-hover:animate-bounce"
          aria-hidden="true"
        />
      </div>
      <h1 className="text-2xl font-bold mt-4 text-gray-800">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.string),
  iconBg: PropTypes.string,
  iconColor: PropTypes.string,
};

export default FeatureCard;
