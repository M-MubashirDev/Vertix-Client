import { useRef, useEffect, useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import ButtonNav from "../UI/ButtonNav";
import FooterDetails from "../Components/Footer/FooterDetails";
import Testimonials from "../Components/Testimonials";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BeforeAfterSlider from "../UserLanding/HorizontalStepsScroll";
import BeforeAfterText from "../UserLanding/BeforeAfterText";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  // GSAP animations
  const navbarRef = useRef(null);
  const contentRef = useRef(null);
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
      <section className="min-h-screen ">
        <div className="relative h-screen w-full bg-black ">
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
      <section ref={sectionRef} className="">
        <Testimonials />
      </section>

      <section
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23FFFFFF" fill-opacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // height: "px",
        }}
        // className="bg-[#eff0f1] min-h-fit w-full py-16"
        className="  flex min-w-full justify-center h-full  bg-primary items-center flex-col g-primary-dark"
      >
        <BeforeAfterSlider />
        <BeforeAfterText />
      </section>
      {/* Footer Section */}

      <section>
        <FooterDetails />
      </section>
    </>
  );
}

export default Home;
