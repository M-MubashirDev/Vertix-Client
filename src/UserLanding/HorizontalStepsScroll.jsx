// import { useRef, useEffect, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// function Horizontal() {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current section
//   const sectionsRef = useRef([]); // Store references to each section

//   // Set up gsap scrollTrigger animation
//   useEffect(() => {
//     // Set initial scroll position
//     gsap.to(sectionsRef.current, {
//       scrollTrigger: {
//         trigger: sectionsRef.current[0],
//         start: "top top", // Trigger when the first section reaches the top
//         end: `+=${sectionsRef.current.length * window.innerWidth}`, // Scroll through all sections
//         pin: true, // Keep the first section pinned
//         scrub: 1, // Smooth scroll
//         markers: true, // Optional, for debugging
//         onUpdate: ({ progress }) => {
//           // Calculate index based on scroll progress
//           const newIndex = Math.floor(
//             progress * (sectionsRef.current.length - 1)
//           );
//           setCurrentIndex(newIndex);
//         },
//       },
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden">
//       {/* Horizontal Scroll Wrapper */}
//       <div className="flex w-[300vw]">
//         {" "}
//         {/* Adjust to cover 3 sections */}
//         {/* First Section */}
//         <div
//           ref={(el) => (sectionsRef.current[0] = el)}
//           className="flex-none w-[100vw] h-screen bg-yellow-400 flex items-center justify-center"
//         >
//           <div>
//             <h1>The First Step</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//               maxime molestias magnam aliquam modi perspiciatis nisi nulla
//               consequatur molestiae, illum adipisci voluptatibus omnis ratione
//               vel aperiam consequuntur accusantium! Qui, dolores!
//             </p>
//           </div>
//         </div>
//         {/* Second Section */}
//         <div
//           ref={(el) => (sectionsRef.current[1] = el)}
//           className="flex-none w-[100vw] h-screen bg-red-400 flex items-center justify-center"
//         >
//           <div>
//             <h1>The Second Step</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//               maxime molestias magnam aliquam modi perspiciatis nisi nulla
//               consequatur molestiae, illum adipisci voluptatibus omnis ratione
//               vel aperiam consequuntur accusantium! Qui, dolores!
//             </p>
//           </div>
//         </div>
//         {/* Third Section */}
//         <div
//           ref={(el) => (sectionsRef.current[2] = el)}
//           className="flex-none w-[100vw] h-screen bg-blue-400 flex items-center justify-center"
//         >
//           <div>
//             <h1>The Third Step</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//               maxime molestias magnam aliquam modi perspiciatis nisi nulla
//               consequatur molestiae, illum adipisci voluptatibus omnis ratione
//               vel aperiam consequuntur accusantium! Qui, dolores!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
//         <footer>
//           <p>Footer Content</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Horizontal;
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Horizontal() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current section
  const sectionsRef = useRef([]); // Store references to each section

  // Set up gsap scrollTrigger animation
  useEffect(() => {
    // Set initial scroll position
    gsap.to(sectionsRef.current, {
      scrollTrigger: {
        trigger: sectionsRef.current[0],
        start: "top top", // Trigger when the first section reaches the top
        end: `+=${sectionsRef.current.length * window.innerWidth}`, // Scroll through all sections
        pin: true, // Keep the first section pinned
        scrub: 1, // Smooth scroll
        markers: true, // Optional, for debugging
        onUpdate: ({ progress }) => {
          // Calculate index based on scroll progress
          const newIndex = Math.floor(
            progress * (sectionsRef.current.length - 1)
          );
          setCurrentIndex(newIndex);
        },
      },
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Horizontal Scroll Wrapper */}
      <div className="flex w-[300vw]">
        {" "}
        {/* Adjust to cover 3 sections */}
        {/* First Section */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="flex-none w-[100vw] h-screen bg-yellow-400 flex items-center justify-center"
        >
          <div>
            <h1>The First Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              maxime molestias magnam aliquam modi perspiciatis nisi nulla
              consequatur molestiae, illum adipisci voluptatibus omnis ratione
              vel aperiam consequuntur accusantium! Qui, dolores!
            </p>
          </div>
        </div>
        {/* Second Section */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="flex-none w-[100vw] h-screen bg-red-400 flex items-center justify-center"
        >
          <div>
            <h1>The Second Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              maxime molestias magnam aliquam modi perspiciatis nisi nulla
              consequatur molestiae, illum adipisci voluptatibus omnis ratione
              vel aperiam consequuntur accusantium! Qui, dolores!
            </p>
          </div>
        </div>
        {/* Third Section */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="flex-none w-[100vw] h-screen bg-blue-400 flex items-center justify-center"
        >
          <div>
            <h1>The Third Step</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
              maxime molestias magnam aliquam modi perspiciatis nisi nulla
              consequatur molestiae, illum adipisci voluptatibus omnis ratione
              vel aperiam consequuntur accusantium! Qui, dolores!
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
        <footer>
          <p>Footer Content</p>
        </footer>
      </div>
    </div>
  );
}

export default Horizontal;
