import FeatureCard from "../components/FeatureCard";
import {
  AiFillClockCircle,
  AiFillStar,
  AiFillHeart,
  AiFillBulb,
} from "react-icons/ai";
const FeatureSection = () => {
  // Sample data list
  const features = [
    {
      icon: AiFillClockCircle,
      title: "Time Management",
      listItems: [
        "Track tasks efficiently",
        "Set reminders",
        "Schedule meetings",
      ],
      iconBg: "amber-600",
      iconColor: "indigo-300",
    },
    {
      icon: AiFillStar,
      title: "Priority Tasks",
      listItems: [
        "Highlight key tasks",
        "Mark as urgent",
        "Star important items",
      ],
      iconBg: "amber-600",
      iconColor: "amber-300",
    },
    {
      icon: AiFillHeart,
      title: "Team Collaboration",
      listItems: ["Share tasks", "Real-time updates", "Assign roles"],
      iconBg: "red-600",
      iconColor: "red-300",
    },
    {
      icon: AiFillBulb,
      title: "Innovative Ideas",
      listItems: ["Brainstorm sessions", "Idea tracking", "Creative workflows"],
      iconBg: "green-600",
      iconColor: "indigo-300",
    },
  ];
  return (
    <div className="relative flex flex-col z-10 gap-5 px-3">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="text-4xl font-bold">Study adaptability</h1>
        <p className="text-gray-500">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="relative flex md:flex-row flex-col gap-2 w-full ">
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
    </div>
  );
};

export default FeatureSection;
