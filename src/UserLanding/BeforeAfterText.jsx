import React, { useRef, useEffect } from "react";
import { FaPhoneVolume, FaCarSide } from "react-icons/fa";
import { RiCarWashingFill } from "react-icons/ri";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BeforeAfterText = () => {
  // Create references for each icon
  const iconRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    // Animate each icon as the user scrolls
    iconRefs.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.5, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 120%",
            end: "top 30%",
            scrub: true,
            markers: true, // Remove or set to false to hide the debug markers
          },
        }
      );
    });
  }, [iconRefs]);

  return (
    <div className="flex flex-row space-x-8 justify-center items-center py-8">
      {/* 1. Book the Station (Phone Icon) */}
      <div
        ref={iconRefs[0]}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-300 transition duration-300 shadow-lg text-primary-dark"
      >
        <FaPhoneVolume size={30} />
      </div>

      {/* 2. Car in Service (Soapy Car Icon) */}
      <div
        ref={iconRefs[1]}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-300 transition duration-300 shadow-lg text-primary-dark"
      >
        <RiCarWashingFill size={30} />
      </div>

      {/* 3. Clean & Shiny (Clean Car Icon) */}
      <div
        ref={iconRefs[2]}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-300 transition duration-300 shadow-lg text-primary-dark"
      >
        <FaCarSide size={30} />
      </div>
    </div>
  );
};

export default BeforeAfterText;
