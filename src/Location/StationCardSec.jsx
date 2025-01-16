import { useNavigate } from "react-router-dom";

function StationCardSec({ title, points, stationsData }) {
  const navigate = useNavigate();
  function Click(point) {
    navigate(`${point._id}/services`);
  }
  return (
    <div className="w-full p-6 flex flex-wrap justify-center md:justify-start gap-12">
      {stationsData?.map((point, index) => (
        <button
          onClick={() => Click(point)}
          key={point._id}
          className="cursor-pointer text-center md:text-start flex flex-col sm:flex-row gap-4 items-center w-full md:w-[48%]  lg:w-fit transition-transform hover:scale-105"
        >
          {/* Station Image */}
          <img
            src={point.image ? point.image : "/stationNots.webp"}
            alt="station img"
            className="w-16 h-16 rounded-full object-cover hover:opacity-80 transition-opacity"
          />

          {/* Station Info */}
          <div className="hover:text-primary-dark transition-colors">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <img
                src="/markedremoved.png"
                className="w-6 h-6 md:w-8 md:h-8"
                alt="location mark"
              />
              <h3 className="text-lg md:text-xl font-semibold">
                Car Wash Point
              </h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base hover:text-gray-800">
              {point.address}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default StationCardSec;
