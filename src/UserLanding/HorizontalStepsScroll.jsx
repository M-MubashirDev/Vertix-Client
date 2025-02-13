import { useState } from "react";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="relative w-full max-w-2xl   -translate-y-[5%]  overflow-hidden rounded-lg shadow-lg">
      {/* Before Image (Dirty Car) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src="dirty.webp"
          alt="Dirty Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* After Image (Clean Car) */}
      <div className="w-full h-full">
        <img
          src="clean.webp"
          alt="Clean Car"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-5"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-white rounded-full shadow-md"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
