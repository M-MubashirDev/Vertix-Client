// import { useState, useEffect, useRef } from "react";
// import { GrNext, GrPrevious } from "react-icons/gr";
// import FeaturesSection from "./IconGrayed";
// import { gsap } from "gsap";

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);
//   const testimonialRef = useRef(null);

//   const testimonials = [
//     {
//       text: "Seamlessly empower fully researched growth strategies and interoperable internal or organic sources. Credibly innovate granular internal or organic sources without the clutter.",
//       author: "John Smith",
//       position: "CEO, ABC Inc.",
//     },
//     {
//       text: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
//       author: "Emily Johnson",
//       position: "COO, DEF Ltd.",
//     },
//   ];

//   // Animations with GSAP
//   useEffect(() => {
//     if (testimonialRef.current) {
//       gsap.fromTo(
//         testimonialRef.current,
//         { opacity: 0, y: 20 }, // Start state
//         { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" } // End state
//       );
//     }
//   }, [current]);

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <section className="bg-neutral-light py-16 relative">
//       <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left Side: Heading */}
//         <div className="bg-primary-dark text-white flex flex-col min-h-60 h-64 justify-center items-center p-8 rounded-lg">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
//             What Our Customers Are Saying!
//           </h2>
//           <div className="flex justify-center items-center gap-2">
//             <button
//               onClick={prevSlide}
//               className="flex items-center justify-center bg-primary-light w-10 h-10 hover:bg-white hover:text-primary-dark text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-lg"
//             >
//               <GrPrevious size={16} />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="flex items-center justify-center bg-primary-light w-10 h-10 hover:bg-white hover:text-primary-dark text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-lg"
//             >
//               <GrNext size={16} />
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Animated Testimonial */}
//         <div
//           ref={testimonialRef}
//           className="bg-white flex flex-col min-h-fit lg:h-64 justify-between  shadow-md rounded-lg p-8"
//         >
//           <blockquote className="text-neutral-dark text-lg sm:text-2xl mb-4">
//             “{testimonials[current].text}”
//           </blockquote>
//           <div>
//             <p className="text-primary-dark font-semibold">
//               {testimonials[current].author}
//             </p>
//             <p className="text-neutral-dark text-sm">
//               {testimonials[current].position}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Z-Pattern Additional Content */}
//       <div className="justify-self-end mx-auto mt-16 text-center items-center flex flex-col gap-8">
//         <FeaturesSection />
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import { useState, useEffect, useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import FeaturesSection from "./IconGrayed";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const testimonialRef = useRef(null);
  const buttonParentRef = useRef(null); // Reference for the parent div

  const testimonials = [
    {
      text: "Seamlessly empower fully researched growth strategies and interoperable internal or organic sources. Credibly innovate granular internal or organic sources without the clutter.",
      author: "John Smith",
      position: "CEO, ABC Inc.",
    },
    {
      text: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.",
      author: "Emily Johnson",
      position: "COO, DEF Ltd.",
    },
  ];

  // GSAP ScrollTrigger animations for testimonial section
  useEffect(() => {
    if (testimonialRef.current && buttonParentRef.current) {
      const isMobile = window.innerWidth <= 768; // Detect if it's a mobile screen

      // Testimonial quote slide-in animation from the right
      gsap.fromTo(
        testimonialRef.current,
        { x: "100%", opacity: 0 }, // Initial state (offscreen to the right)
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out", // Smoother ease function
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: isMobile ? "top 200%" : "top 70%", // Adjusted for mobile
            end: isMobile ? "top 20%" : "top 30%", // Adjusted for mobile
            scrub: 1, // Smoother scrubbing
            toggleActions: "play none none reverse", // Reverse the animation when scrolling away
          },
        }
      );

      // Entire button parent div (including heading and buttons) slide-in animation from the left
      gsap.fromTo(
        buttonParentRef.current,
        { x: "-100%", opacity: 0 }, // Initial state (offscreen to the left)
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.5,
          ease: "power3.out", // Smoother ease function
          scrollTrigger: {
            trigger: buttonParentRef.current,
            start: isMobile ? "top 200%" : "top 70%", // Adjusted for mobile
            end: isMobile ? "top 20%" : "top 30%", // Adjusted for mobile
            scrub: 1, // Smoother scrubbing
            toggleActions: "play none none reverse", // Reverse the animation when scrolling away
          },
        }
      );
    }
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-neutral-light py-16 relative">
      <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Heading & Buttons (Entire Parent Div moves) */}
        <div
          ref={buttonParentRef}
          className="bg-primary-dark text-white flex flex-col min-h-60 h-64 justify-center items-center p-8 rounded-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            What Our Customers Are Saying!
          </h2>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center bg-primary-light w-10 h-10 hover:bg-white hover:text-primary-dark text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-lg"
            >
              <GrPrevious size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center bg-primary-light w-10 h-10 hover:bg-white hover:text-primary-dark text-white rounded-full transition-transform duration-300 ease-in-out hover:scale-110 shadow-md hover:shadow-lg"
            >
              <GrNext size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Animated Testimonial */}
        <div
          ref={testimonialRef}
          className="bg-white flex flex-col min-h-fit lg:h-64 justify-between shadow-md rounded-lg p-8"
        >
          <blockquote className="text-neutral-dark text-lg sm:text-2xl mb-4">
            “{testimonials[current].text}”
          </blockquote>
          <div>
            <p className="text-primary-dark font-semibold">
              {testimonials[current].author}
            </p>
            <p className="text-neutral-dark text-sm">
              {testimonials[current].position}
            </p>
          </div>
        </div>
      </div>

      {/* Z-Pattern Additional Content */}
      <div className="justify-self-end  mx-auto mt-16 text-center items-center flex flex-col gap-8 ">
        <FeaturesSection />
      </div>
    </section>
  );
};

export default Testimonials;
