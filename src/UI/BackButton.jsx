// src/components/BackButton.jsx
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1); // Navigate back
    } else {
      navigate("/"); // Navigate to home or another default route
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="bg-white text-center w-36 rounded-xl h-10 relative text-primary font-semibold border-2 border-primary group focus:outline-none focus:ring-2 focus:ring-primary-dark"
      aria-label="Go Back"
    >
      <div className="bg-primary dark:bg-primary-dark rounded-lg h-full w-1/3 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500 transition-all">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          ></path>
          <path
            fill="currentColor"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          ></path>
        </svg>
      </div>
      <p className="translate-x-2 text-primary group-hover:text-white transition-colors duration-500 text-sm">
        Back
      </p>
    </button>
  );
};
// src/components/ForwardButton.jsx

const ForwardButton = ({ latitude, longitude }) => {
  const handleClick = () => {
    if (latitude && longitude) {
      const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(googleMapsUrl, "_blank"); // Opens Google Maps in a new tab
    } else {
      toast.error("Please select the Station first");
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick} // Attach the click handler
      className="bg-white text-center w-36 rounded-xl h-10 relative text-primary font-semibold border-2 border-primary group focus:outline-none focus:ring-2 focus:ring-primary-dark"
      aria-label="Go Forward"
    >
      <div className="bg-primary dark:bg-primary-dark rounded-lg h-full w-1/3 grid place-items-center absolute right-0 top-0 group-hover:w-full z-10 duration-500 transition-all">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M800 480H160a32 32 0 0 0 0 64h640a32 32 0 1 0 0-64z"
          ></path>
          <path
            fill="currentColor"
            d="M786.752 512 521.344 777.344a32 32 0 1 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L786.752 512z"
          ></path>
        </svg>
      </div>
      <p className="text-primary group-hover:text-white transition-colors text-center mr-8 duration-500 text-sm">
        Direction
      </p>
    </button>
  );
};

export { ForwardButton };

export default BackButton;
