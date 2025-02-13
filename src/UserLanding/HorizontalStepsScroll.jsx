import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CarWashAnimation() {
  const carRef = useRef(null);
  const bubblesRef = useRef([]);
  const scrubBrushRef = useRef(null);
  const waterSplashRef = useRef(null);
  const airBlowerRef = useRef(null);
  const sparklesRef = useRef([]);

  useEffect(() => {
    // Step 1: Car Arrival
    gsap.from(carRef.current, {
      x: "-100%",
      duration: 2,
      ease: "power2.out",
    });

    // Step 2: Soap Application
    bubblesRef.current.forEach((bubble, i) => {
      gsap.to(bubble, {
        opacity: 1,
        y: -100,
        scale: 1.5,
        duration: 1,
        delay: i * 0.2,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    // Step 3: Scrubbing
    gsap.from(scrubBrushRef.current, {
      x: "-100%",
      duration: 2,
      ease: "power2.out",
    });

    // Step 4: Rinsing
    gsap.to(waterSplashRef.current, {
      opacity: 1,
      scale: 1.5,
      duration: 2,
      ease: "power2.out",
    });

    // Step 5: Drying
    gsap.from(airBlowerRef.current, {
      x: "-100%",
      duration: 2,
      ease: "power2.out",
    });
    sparklesRef.current.forEach((sparkle, i) => {
      gsap.to(sparkle, {
        opacity: 1,
        y: -50,
        scale: 1.5,
        duration: 1,
        delay: i * 0.2,
        repeat: 1,
        yoyo: true,
        ease: "power2.inOut",
      });
    });

    // Step 6: Car Departure
    gsap.to(carRef.current, {
      x: "100%",
      duration: 2,
      ease: "power2.in",
    });
  }, []);

  return (
    <div className="car-wash-container">
      {/* Step 1: Car Arrival */}
      <div className="step step-1">
        <img ref={carRef} src="car.png" alt="Car" className="car" />
      </div>

      {/* Step 2: Soap Application */}
      <div className="step step-2">
        <div className="bubbles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (bubblesRef.current[i] = el)}
              className="bubble"
            />
          ))}
        </div>
      </div>

      {/* Step 3: Scrubbing */}
      <div className="step step-3">
        <img
          ref={scrubBrushRef}
          src="scrub-brush.png"
          alt="Scrub Brush"
          className="scrub-brush"
        />
      </div>

      {/* Step 4: Rinsing */}
      <div className="step step-4">
        <div ref={waterSplashRef} className="water-splash" />
      </div>

      {/* Step 5: Drying */}
      <div className="step step-5">
        <img
          ref={airBlowerRef}
          src="air-blower.png"
          alt="Air Blower"
          className="air-blower"
        />
        <div className="sparkles">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (sparklesRef.current[i] = el)}
              className="sparkle"
            />
          ))}
        </div>
      </div>

      {/* Step 6: Car Departure */}
      <div className="step step-6">
        <img ref={carRef} src="car.png" alt="Car" className="car" />
      </div>
    </div>
  );
}

export default CarWashAnimation;
