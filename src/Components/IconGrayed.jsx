import { useEffect, useRef } from "react";
import {
  FaHandsWash,
  FaHeart,
  FaLaptopCode,
  FaBuilding,
  FaNetworkWired,
} from "react-icons/fa";
import { RiCarWashingFill } from "react-icons/ri";
import ExpandableButton from "../UI/ExpandableButton";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureIcon = ({ icon, title, description }) => {
  const iconRef = useRef(null);
  const textRef = useRef(null);

  // GSAP Animation for each icon and text when it scrolls into view
  useEffect(() => {
    // Icon animation
    gsap.fromTo(
      iconRef.current,
      {
        opacity: 0,
        scale: 0.5,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 120%",
          end: "top 30%",
          scrub: true,
          markers: true,
        },
      }
    );

    // Text animation
    gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 120%",
          end: "top 30%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center text-center w-40 p-4">
      {/* Icon */}
      <div
        ref={iconRef}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 shadow-lg"
      >
        {icon}
      </div>
      {/* Title */}
      <h3 ref={textRef} className="text-gray-700 font-bold text-lg mt-4">
        {title}
      </h3>
      {/* Description */}
      <p ref={textRef} className="text-gray-500 text-sm mt-2">
        {description}
      </p>
    </div>
  );
};

const FeaturesSection = () => {
  const navigate = useNavigate();
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // GSAP Animation for the heading and paragraph
  useEffect(() => {
    // Fade in and bounce animation for the heading
    gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: () => {
          gsap.to(headingRef.current, {
            y: -10,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });
        },
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: true,
        },
      }
    );

    // Fade in and bounce animation for the paragraph
    gsap.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        onComplete: () => {
          gsap.to(paragraphRef.current, {
            y: -10,
            duration: 0.5,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          });
        },
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          markers: true,
        },
      }
    );
  }, []);

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
    <section
      style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FFFFFF" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "px",
      }}
      className="bg-[#eff0f1] min-h-fit w-full py-16"
    >
      <div className="max-w-[1440px] flex flex-col w-[90%] mx-auto text-center">
        {/* Heading */}
        <div className="flex flex-col mb-4 items-center justify-center">
          <h3
            ref={headingRef}
            className="text-primary-dark text-2xl sm:text-3xl font-bold mb-4"
          >
            Why Choose Us?
          </h3>
          <p
            ref={paragraphRef}
            className="text-neutral-dark text-lg lg:max-w-[70%] sm:text-xl leading-relaxed"
          >
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
            text="Let's Wash"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
