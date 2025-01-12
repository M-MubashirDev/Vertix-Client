import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { BsPersonCircle, BsPersonPlus } from "react-icons/bs";

const StationCard = () => {
  return (
    <div className="flex items-center justify-center h-[294px] w-[240px] perspective-[800px] font-sans">
      <div className="relative w-full h-full bg-black rounded-2xl transform transition-transform duration-[1500ms] transform-style-preserve-3d group hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5 rounded-2xl shadow-md backface-hidden bg-primary-dark">
          <div className="flex items-center justify-center w-1/2 h-[10%] bg-transparent border-2 border-primary-light border-t-0 rounded-b-lg shadow-lg">
            <p className="text-white text-sm font-bold">Profile</p>
          </div>
          <BsPersonCircle size={100} className="text-white" />
          <p className="text-lg font-bold text-white">Front Card</p>
          <p className="text-sm font-medium text-white">
            Follow me for more...
          </p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center gap-5 rounded-2xl shadow-md backface-hidden bg-primary-light transform rotate-y-180">
          <p className="text-lg font-bold text-white">Follow Me</p>
          <BsPersonPlus size={100} className="text-white" />
          <div className="flex flex-row gap-5 mt-5">
            <FaInstagram size={32} className="text-white hover:text-pink-500" />
            <FaTwitter size={32} className="text-white hover:text-blue-500" />
            <FaWhatsapp size={32} className="text-white hover:text-green-500" />
            <FaFacebook size={32} className="text-white hover:text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationCard;
