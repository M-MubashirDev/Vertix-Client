// import { useState } from "react";
// import { GrNext, GrPrevious } from "react-icons/gr";

// const Testimonials = () => {
//   const [current, setCurrent] = useState(0);

//   const testimonials = [
//     {
//       text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal has evolved from generation X on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.",
//       author: "Winter Doe",
//       position: "CTO, XYZ Corp.",
//     },
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

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   return (
//     <section className="bg-neutral-light py-16">
//       <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//         {/* Left Side: Heading */}
//         <div className="bg-primary-dark text-white flex flex-col min-h-60 h-64 justify-center items-center p-8 rounded-lg">
//           <h2 className="text-2xl sm:text-3xl font-bold mb-4">
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

//         {/* Right Side: Testimonial */}
//         <div className="bg-white flex flex-col min-h-60 h-64 justify-between shadow-md rounded-lg p-8">
//           <blockquote className="text-neutral-dark text-lg sm:text-xl mb-4">
//             “{testimonials[current].text}”
//           </blockquote>
//           <div>
//             <p className="text-primary-dark  font-semibold">
//               {testimonials[current].author}
//             </p>
//             <p className="text-neutral-dark text-sm">
//               {testimonials[current].position}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import FeaturesSection from "./IconGrayed";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal has evolved from generation X on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.",
      author: "Winter Doe",
      position: "CTO, XYZ Corp.",
    },
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-neutral-light py-16 relative">
      <div className="max-w-[1440px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side: Heading */}
        <div className="bg-primary-dark text-white flex flex-col min-h-60 h-64 justify-center items-center p-8 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
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

        {/* Right Side: Testimonial */}
        <div className="bg-white flex flex-col min-h-60 lg:h-64 justify-between shadow-md rounded-lg p-8">
          <blockquote className="text-neutral-dark text-lg sm:text-xl mb-4">
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
      <div className="justify-self-end mx-auto mt-16 text-center items-center flex flex-col gap-8">
        <FeaturesSection />
      </div>
    </section>
  );
};

export default Testimonials;
