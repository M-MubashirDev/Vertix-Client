import { useRef, useEffect, useState, useMemo } from "react";
import Navbar from "../Components/Navbar";
import ButtonNav from "../UI/ButtonNav";
import FooterDetails from "../Components/Footer/FooterDetails";
import Footer from "../Components/Footer/Footer";
import Testimonials from "../Components/Testimonials";

function Home() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoSources = useMemo(
    () => ["/videos/video4.mp4", "/videos/video3.mp4"],
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

  return (
    <>
      <section className="min-h-screen">
        <div className="relative h-screen w-full bg-black overflow-hidden">
          {/* Navbar */}
          <div className="relative z-10">
            <Navbar />
          </div>

          {/* Video Background */}
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
          />
          <div className="absolute z-40  bottom-0 w-full">
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
          <div className="relative flex flex-col text-center items-center  max-w-[1440px]  w-[90%] mx-auto py-12 sm:mt-24 text-white h-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6">
              Welcome to <span className="text-primary-light">Vertix</span>
            </h1>
            <p className="text-[16px] lg:text-xl  sm:text-lg text-gray-300 max-w-[90%] lg:max-w-[50%] mb-12">
              Embrace the future with modern technology that redefines the way
              we connect. Experience trusted, seamless, and comfortable
              communication designed to bring people closer, no matter the
              distance. From smart solutions to reliable platforms, we empower
              meaningful interactions in a fast-paced, connected world.
            </p>
            <ButtonNav>Get Plan</ButtonNav>
            <div className="flex-grow flex flex-col"></div>
          </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section>
      <section className="">
        <FooterDetails />
      </section>
    </>
  );
}

export default Home;