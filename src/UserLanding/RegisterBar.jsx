import { useRef, useLayoutEffect } from "react";
import { FaCar, FaInfoCircle, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import gsap from "gsap";

function AnimatedCarCard({ car }) {
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-primary-dark to-primary-light text-white transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
    >
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
          <FaCar className="text-3xl text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{car.carName}</h2>
          <p className="text-sm opacity-80">
            {car.carModel} - {car.carColor}
          </p>
        </div>
      </div>

      {/* Package Details */}
      {car.packageId && (
        <div className="mb-4 space-y-2">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <FaInfoCircle /> {car.packageId.title}
          </h3>
          <p className="text-sm flex items-start gap-2 opacity-90">
            <MdOutlineDescription /> {car.packageId.description}
          </p>
          <p className="text-lg font-bold mt-2">$ {car.packageId.price}</p>
        </div>
      )}

      {/* Owner and Address */}
      <div className="mt-6 pt-4 border-t border-white/20">
        <p className="text-sm flex items-center gap-2 opacity-90">
          <FaMapMarkerAlt /> {car.ownerAddress}
        </p>
        <p className="text-sm opacity-80">
          <strong>Owner:</strong> {car.ownerName}
        </p>
      </div>
    </div>
  );
}

export default AnimatedCarCard;
