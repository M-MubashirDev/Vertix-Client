// import { useRef, useEffect, useState, useMemo } from "react";
// import Navbar from "../Components/Navbar";
// import ButtonNav from "../UI/ButtonNav";
// import FooterDetails from "../Components/Footer/FooterDetails";
// import Testimonials from "../Components/Testimonials";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useNavigate } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// function Home() {
//   const navigate = useNavigate();

//   // GSAP animations
//   const navbarRef = useRef(null);
//   const contentRef = useRef(null);
//   const horizontalScrollRef = useRef(null);
//   const page2H2 = useRef(null);
//   const page = useRef(null);
//   const sectionRef = useRef(null);

//   useGSAP(() => {
//     const masterTimeline = gsap.timeline();
//     masterTimeline
//       .from(navbarRef.current, { y: -100, opacity: 0, duration: 1.2 })
//       .from([...contentRef.current.children], {
//         opacity: 0,
//         duration: 1,
//         stagger: 0.3,
//       });
//   }, {});

//   useGSAP(() => {
//     gsap.to(page2H2.current, {
//       x: "-300vw", // Move three times the viewport width
//       scrollTrigger: {
//         trigger: page.current,
//         scroller: "body",
//         start: "top top",
//         end: "+=3000", // Adjust based on the total width of the horizontal sections
//         scrub: 2,
//         pin: true,
//         markers: true, // Shows markers for debugging
//       },
//     });
//   });

//   // Background video logic
//   const videoRef = useRef(null);
//   const [currentVideo, setCurrentVideo] = useState(0);

//   const videoSources = useMemo(
//     () => ["/videos/video3.mp4", "/videos/video3.mp4"],
//     []
//   );

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const handleVideoEnd = () => {
//       setCurrentVideo((prevVideo) => (prevVideo + 1) % videoSources.length);
//     };

//     if (videoElement) {
//       videoElement.addEventListener("ended", handleVideoEnd);
//     }

//     return () => {
//       if (videoElement) {
//         videoElement.removeEventListener("ended", handleVideoEnd);
//       }
//     };
//   }, [videoSources]);

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.src = videoSources[currentVideo];
//       videoElement.play().catch(() => console.log("Auto-play failed"));
//     }
//   }, [currentVideo, videoSources]);

//   useGSAP(() => {
//     gsap.from(sectionRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 2,
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//         end: "top 30%",
//         scrub: true,
//         toggleActions: "play none none reverse",
//       },
//     });
//   });

//   return (
//     <>
//       <section className="min-h-screen">
//         <div className="relative h-screen w-full bg-black overflow-hidden">
//           {/* Navbar */}
//           <div ref={navbarRef} className="relative z-10">
//             <Navbar />
//           </div>

//           {/* Video Background */}
//           <video
//             ref={videoRef}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//             autoPlay
//             muted
//           />
//           <div className="absolute z-40 bottom-0 w-full">
//             <svg
//               className="w-full h-auto"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 1440 320"
//             >
//               <path
//                 fill="#fff"
//                 d="M0,320L480,320C560,320,640,240,720,240C800,240,880,320,960,320L1440,320L1440,320L0,320Z"
//               ></path>
//             </svg>
//           </div>

//           {/* Dimming Layer */}
//           <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

//           {/* Overlay Content */}
//           <div
//             ref={contentRef}
//             className="relative flex flex-col text-center items-center max-w-[1440px] w-[90%] mx-auto py-12 mt-20 gap-2 text-white h-full"
//           >
//             <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
//               Welcome to <span className="text-primary-light">Vertix</span>
//             </h1>
//             <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-300 max-w-[90%] lg:max-w-[50%] mb-7">
//               Embrace the future with modern technology that redefines the way
//               we connect. Experience trusted, seamless, and comfortable
//               communication designed to bring people closer, no matter the
//               distance. From smart solutions to reliable platforms, we empower
//               meaningful interactions in a fast-paced, connected world.
//             </p>
//             <div>
//               <ButtonNav to="location">Get Start</ButtonNav>
//             </div>
//             <div className="flex-grow flex flex-col"></div>
//           </div>
//         </div>
//       </section>
//       <section ref={sectionRef}>
//         <Testimonials />
//       </section>

//       {/* Horizontal Scroll Section */}
//       <section ref={page} className="bg-gray-800">
//         <div ref={page2H2} className="flex w-[300vw] h-screen">
//           <div className="w-screen h-screen flex items-center justify-center bg-yellow-400">
//             <div>
//               <h1>the first step</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//                 maxime molestias magnam aliquam modi perspiciatis nisi nulla
//                 consequatur molestiae, illum adipisci voluptatibus omnis ratione
//                 vel aperiam consequuntur accusantium! Qui, dolores!
//               </p>
//             </div>
//             <img src="logo.png" alt="" />
//           </div>
//           <div className="w-screen h-screen flex items-center justify-center bg-red-200">
//             <div>
//               <h1>the second step</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//                 maxime molestias magnam aliquam modi perspiciatis nisi nulla
//                 consequatur molestiae, illum adipisci voluptatibus omnis ratione
//                 vel aperiam consequuntur accusantium! Qui, dolores!
//               </p>
//             </div>
//             <img src="logo.png" alt="" />
//           </div>
//           <div className="w-screen h-screen flex items-center justify-center bg-blue-200">
//             <div>
//               <h1>the third step</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
//                 maxime molestias magnam aliquam modi perspiciatis nisi nulla
//                 consequatur molestiae, illum adipisci voluptatibus omnis ratione
//                 vel aperiam consequuntur accusantium! Qui, dolores!
//               </p>
//             </div>
//             <img src="logo.png" alt="" />
//           </div>
//         </div>
//       </section>

//       <section>
//         <FooterDetails />
//       </section>
//     </>
//   );
// }

// export default Home;
import { useRef, useEffect, useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import ButtonNav from "../UI/ButtonNav";
import FooterDetails from "../Components/Footer/FooterDetails";
import Testimonials from "../Components/Testimonials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const navigate = useNavigate();

  // GSAP animations
  const navbarRef = useRef(null);
  const contentRef = useRef(null);
  const page2H2 = useRef(null);
  const page = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const masterTimeline = gsap.timeline();
    masterTimeline
      .from(navbarRef.current, { y: -100, opacity: 0, duration: 1.2 })
      .from([...contentRef.current.children], {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
      });
  }, {});

  useGSAP(() => {
    gsap.to(page2H2.current, {
      x: "-200vw", // Move two times the viewport width (for three sections)
      scrollTrigger: {
        trigger: page.current,
        scroller: "body",
        start: "top 0%", // Adjust the start position
        end: "+=2500", // Increase the end value to add a delay
        scrub: 2,
        pin: true,
        markers: true, // Shows markers for debugging
        onEnterBack: () => {
          // Add a delay before allowing vertical scroll
          gsap.delayedCall(4, () => {
            // Allow vertical scroll after 4 seconds delay
            ScrollTrigger.refresh(); // Refresh ScrollTrigger to update calculations
          });
        },
      },
    });
  });

  // Background video logic
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = useMemo(
    () => ["/videos/video3.mp4", "/videos/video3.mp4"],
    []
  );

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setCurrentVideo((prevVideo) => (prevVideo + 1) % videoSources.length);
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [videoSources]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = videoSources[currentVideo];
      videoElement.play().catch(() => console.log("Auto-play failed"));
    }
  }, [currentVideo, videoSources]);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <>
      <section className="min-h-screen">
        <div className="relative h-screen w-full bg-black overflow-hidden">
          {/* Navbar */}
          <div ref={navbarRef} className="relative z-10">
            <Navbar />
          </div>

          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
          />
          <div className="absolute z-40 bottom-0 w-full">
            <svg
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#fff"
                d="M0,320L480,320C560,320,640,240,720,240C800,240,880,320,960,320L1440,320L1440,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Dimming Layer */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>

          {/* Overlay Content */}
          <div
            ref={contentRef}
            className="relative flex flex-col text-center items-center max-w-[1440px] w-[90%] mx-auto py-12 mt-20 gap-2 text-white h-full"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
              Welcome to <span className="text-primary-light">Vertix</span>
            </h1>
            <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-300 max-w-[90%] lg:max-w-[50%] mb-7">
              Embrace the future with modern technology that redefines the way
              we connect. Experience trusted, seamless, and comfortable
              communication designed to bring people closer, no matter the
              distance. From smart solutions to reliable platforms, we empower
              meaningful interactions in a fast-paced, connected world.
            </p>
            <div>
              <ButtonNav to="location">Get Start</ButtonNav>
            </div>
            <div className="flex-grow flex flex-col"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={sectionRef}>
        <Testimonials />
      </section>

      {/* Horizontal Scroll Section */}
      <section ref={page} className="">
        <div ref={page2H2} className="flex w-[300vw] min-h-screen ">
          <div className="h-screen bg-white grid text-center md:text-start gap-20  md:grid-cols-2  px-4 items-center justify-center max-w-[1440px] mx-auto w-[90%]">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-5xl md:text-4xl text-3xl  py-6 font-semibold">
                Are You Busy
              </h1>
              <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                Life can get busy, but we make it easier for you. Don’t worry
                about your car’s cleanliness — let us handle it while you focus
                on what matters. Trust Vertix to keep your car spotless, so you
                can enjoy more of life without the hassle.
              </p>
              <img
                src="carwashs.png"
                alt="Car Wash"
                className="sm:max-w-[50%] max-w-[80%] py-3 md:py-10 md:max-w-full"
              />
            </div>
            <div className="flex flex-col-reverse md:block items-center">
              <img
                src="ways.png"
                alt="Ways"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all sm:max-w-[50%] max-w-[80%] md:max-w-fit  duration-300"
              />
              <div>
                <h1 className="lg:text-5xl md:text-4xl text-3xl  md:py-10 py-3 font-semibold">
                  Make Your Life Easy
                </h1>
                <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                  Let us handle the cleaning, so you can enjoy a spotless car
                  without lifting a finger. Contact Vertix today, and let’s make
                  your life easier! Need a quick wash? We offer fast and
                  efficient services to keep your car looking great in no time!
                </p>
              </div>
            </div>
          </div>
          <div className="h-screen bg-white grid text-center md:text-start gap-20  md:grid-cols-2  px-4 items-center justify-center max-w-[1440px] mx-auto w-[90%]">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-5xl md:text-4xl text-3xl  py-6 font-semibold">
                Are You Busy
              </h1>
              <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                Life can get busy, but we make it easier for you. Don’t worry
                about your car’s cleanliness — let us handle it while you focus
                on what matters. Trust Vertix to keep your car spotless, so you
                can enjoy more of life without the hassle.
              </p>
              <img
                src="carwashs.png"
                alt="Car Wash"
                className="sm:max-w-[50%] max-w-[80%] py-3 md:py-10 md:max-w-full"
              />
            </div>
            <div className="flex flex-col-reverse md:block items-center">
              <img
                src="ways.png"
                alt="Ways"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all sm:max-w-[50%] max-w-[80%] md:max-w-fit  duration-300"
              />
              <div>
                <h1 className="lg:text-5xl md:text-4xl text-3xl  md:py-10 py-3 font-semibold">
                  Make Your Life Easy
                </h1>
                <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                  Let us handle the cleaning, so you can enjoy a spotless car
                  without lifting a finger. Contact Vertix today, and let’s make
                  your life easier! Need a quick wash? We offer fast and
                  efficient services to keep your car looking great in no time!
                </p>
              </div>
            </div>
          </div>
          <div className="h-screen bg-white grid text-center md:text-start gap-20  md:grid-cols-2  px-4 items-center justify-center max-w-[1440px] mx-auto w-[90%]">
            <div className="flex flex-col items-center">
              <h1 className="lg:text-5xl md:text-4xl text-3xl  py-6 font-semibold">
                Are You Busy
              </h1>
              <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                Life can get busy, but we make it easier for you. Don’t worry
                about your car’s cleanliness — let us handle it while you focus
                on what matters. Trust Vertix to keep your car spotless, so you
                can enjoy more of life without the hassle.
              </p>
              <img
                src="carwashs.png"
                alt="Car Wash"
                className="sm:max-w-[50%] max-w-[80%] py-3 md:py-10 md:max-w-full"
              />
            </div>
            <div className="flex flex-col-reverse md:block items-center">
              <img
                src="ways.png"
                alt="Ways"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all sm:max-w-[50%] max-w-[80%] md:max-w-fit  duration-300"
              />
              <div>
                <h1 className="lg:text-5xl md:text-4xl text-3xl  md:py-10 py-3 font-semibold">
                  Make Your Life Easy
                </h1>
                <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
                  Let us handle the cleaning, so you can enjoy a spotless car
                  without lifting a finger. Contact Vertix today, and let’s make
                  your life easier! Need a quick wash? We offer fast and
                  efficient services to keep your car looking great in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <FooterDetails />
      </section>
    </>
  );
}

export default Home;
