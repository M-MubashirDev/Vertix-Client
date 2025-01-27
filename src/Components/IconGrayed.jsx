import {
  FaHandsWash,
  FaHeart,
  FaLaptopCode,
  FaBuilding,
  FaNetworkWired,
} from "react-icons/fa";
import ExpandableButton from "../UI/ExpandableButton";
import { RiCarWashingFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const FeatureIcon = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center w-40 p-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 shadow-lg">
        {icon}
      </div>
      {/* Title */}
      <h3 className="text-gray-700 font-bold text-lg mt-4">{title}</h3>
      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: <FaHandsWash size={30} className="text-gray-600" />,
      title: "Cleanliness",
      description: "Ensuring a hygienic and clean experience for all.",
    },
    {
      icon: <FaHeart size={30} className="text-gray-600" />,
      title: "Care",
      description: "Focused on customer care and satisfaction.",
    },
    {
      icon: <FaLaptopCode size={30} className="text-gray-600" />,
      title: "New Technology",
      description: "Leveraging modern tech for seamless services.",
    },
    {
      icon: <FaBuilding size={30} className="text-gray-600" />,
      title: "Best Facility",
      description: "Top-class facilities to meet your expectations.",
    },
    {
      icon: <FaNetworkWired size={30} className="text-gray-600" />,
      title: "Large Network",
      description: "A wide-reaching network for convenience.",
    },
  ];

  return (
    <section className="bg-gray-100   w-full py-16">
      <div className="max-w-[1440px] flex flex-col w-[90%] mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col mb-4 items-center justify-center">
          <h3 className="text-primary-dark text-2xl  sm:text-3xl font-bold mb-4">
            Why Choose Us?
          </h3>
          <p className="text-neutral-dark text-lg lg:max-w-[70%] sm:text-xl leading-relaxed">
            At our company, we deliver exceptional results by focusing on
            quality, innovation, and customer satisfaction. Our innovative
            approach ensures seamless experiences that leave a lasting
            impression. We strive to exceed expectations with unparalleled
            attention to detail, setting new standards in excellence and
            reliability.
          </p>
        </div>
        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <FeatureIcon
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div
          onClick={() => navigate("location")}
          className="w-full flex justify-end sm:opacity-100 opacity-0"
        >
          <ExpandableButton
            icon={<RiCarWashingFill color="white" />}
            text="lets wash"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
