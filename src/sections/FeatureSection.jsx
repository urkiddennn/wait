import FeatureCard from "../components/FeatureCard";
import {
  AiFillClockCircle,
  AiFillStar,
  AiFillHeart,
  AiFillBulb,
} from "react-icons/ai";

const FeatureSection = () => {
  const features = [
    {
      icon: AiFillClockCircle,
      title: "Time Management",
      description: "Track tasks efficiently",

      iconBg: "#4E71FF", // Amber-600
      iconColor: "#8DD8FF", // Indigo-300
    },
    {
      icon: AiFillStar,
      title: "Priority Tasks",
      description: "Highlight key tasks",
      iconBg: "#FFBC4C", // Amber-600
      iconColor: "#FFDE63", // Amber-300
    },
    {
      icon: AiFillHeart,
      title: "Team Collaboration",
      description: "Share tasks",
      iconBg: "#dc2626", // Red-600
      iconColor: "#f87171", // Red-300
    },
    {
      icon: AiFillBulb,
      title: "Innovative Ideas",
      description: "Brainstorm session",
      iconBg: "#78C841", // Green-600
      iconColor: "#B4E50D", // Indigo-300
    },
  ];

  return (
    <div className="relative max-w-5xl flex flex-col z-10 gap-5 px-3">
      <div className="relative flex flex-col z-10 gap-8 px-4 py-8 max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:justify-center justify-start md:items-center items-start">
          <h1 className="text-3xl md:text-6xl font-bold">Study Adaptability</h1>
          <br></br>
          <p className="text-gray-500 mt-2  text-xl md:text-center text-start">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 gap-4 w-full justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconBg={feature.iconBg}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default FeatureSection;
