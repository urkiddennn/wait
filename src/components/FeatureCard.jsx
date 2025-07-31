import PropTypes from "prop-types";
import { AiFillClockCircle } from "react-icons/ai";
const FeatureCard = ({
  icon: Icon = AiFillClockCircle,
  title,
  listItems = [],
  iconBg,
  iconColor = "indigo-300",
}) => {
  return (
    <div className="flex flex-col justify-start items-start p-2 border border-gray-300 rounded-lg ">
      <div className={`bg-${iconBg} p-2 rounded-md`}>
        <Icon className={`text-${iconColor} size-6`} />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
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
