import { useState, useEffect } from "react";

const slides = [
  { title: "Get Your Account", image: "account.webp" },
  { title: "Choose Your Car Wash Plan", image: "plan.webp" },
  { title: "Book Your Appointment", image: "appointment.webp" },
  { title: "Drive To Your Nearest Location", image: "driving.webp" },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="w-[70%] justify-self-center h-80 bg-primary-light overflow-hidden relative rounded-lg shadow-lg">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* Overlay for Better Text Readability */}
          <div className="bg-gradient-to-b from-black/70 to-black/40 w-full h-full flex flex-col justify-center items-center text-white p-4">
            <h2 className="text-2xl md:text-4xl font-bold text-center drop-shadow-md">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-primary-light" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
