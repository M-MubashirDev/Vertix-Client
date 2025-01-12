// const ExpandableButton = ({
//   icon,
//   text,
//   w = "80px",
//   h = "80px",
//   hoverW = "140px",
//   hoverTextDelay = 300,
// }) => {
//   return (
//     <button
//       className="flex items-center justify-start hover:pl-3 border-none rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-primary-dark group"
//       style={{
//         width: w,
//         height: h,
//         transition: "all 0.3s ease-in-out",
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.width = hoverW;
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.width = w;
//       }}
//     >
//       {/* Icon Container */}
//       <div className="sign flex items-center justify-center w-full h-full transition-all duration-300 group-hover:justify-start">
//         {icon}
//       </div>

//       {/* Text Container with Delay */}
//       <span
//         className="absolute right-0 opacity-0 text-white text-[1em] transition-all duration-200 group-hover:opacity-100 group-hover:right-[20px]"
//         style={{
//           transitionDelay: `${hoverTextDelay}ms`,
//         }}
//       >
//         {text}
//       </span>
//     </button>
//   );
// };

// export default ExpandableButton;
import React, { useState } from "react";

const ExpandableButton = ({
  icon,
  text,
  w = "80px",
  h = "80px",
  hoverW = "140px",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex items-center justify-start border-none hover:pl-3 rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.199)] bg-primary-dark group"
      style={{
        width: isHovered ? hoverW : w,
        height: h,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon Container */}
      <div className="flex items-center justify-center w-full h-full transition-all duration-300 group-hover:justify-start">
        {icon}
      </div>

      {/* Text Container */}
      <span
        className={`absolute right-0 text-white text-[1em] transition-all duration-300 ${
          isHovered
            ? "opacity-100 right-[20px]"
            : "opacity-0 right-0 duration-0"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default ExpandableButton;
