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
      listItems: [
        "Track tasks efficiently",
        "Set reminders",
        "Schedule meetings",
      ],
      iconBg: "#4E71FF", // Amber-600
      iconColor: "#8DD8FF", // Indigo-300
    },
    {
      icon: AiFillStar,
      title: "Priority Tasks",
      listItems: [
        "Highlight key tasks",
        "Mark as urgent",
        "Star important items",
      ],
      iconBg: "#FFBC4C", // Amber-600
      iconColor: "#FFDE63", // Amber-300
    },
    {
      icon: AiFillHeart,
      title: "Team Collaboration",
      listItems: ["Share tasks", "Real-time updates", "Assign roles"],
      iconBg: "#dc2626", // Red-600
      iconColor: "#f87171", // Red-300
    },
    {
      icon: AiFillBulb,
      title: "Innovative Ideas",
      listItems: ["Brainstorm sessions", "Idea tracking", "Creative workflows"],
      iconBg: "#78C841", // Green-600
      iconColor: "#B4E50D", // Indigo-300
    },
  ];

  return (
    <div className="relative max-w-5xl flex flex-col z-10 gap-5 px-3">
      <div className="relative flex flex-col z-10 gap-8 px-4 py-8 max-w-7xl mx-auto">
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="text-3xl md:text-6xl font-bold">Study Adaptability</h1>
          <p className="text-gray-500 mt-2  text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              listItems={feature.listItems}
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
