function StationCardSec({ title, points, stationsData }) {
  return (
    <div className="max-w-fit    w-full p-6 flex flex-wrap    justify-start   gap-4">
      {stationsData?.map((point, index) => (
        <div
          key={point._id}
          className=" cursor-pointer text-center md:text-start flex flex-col sm:flex-row gap-4 items-center filter drop-shadow-md rounded-lg p-4"
        >
          <img
            src={point.image ? point.image : "/stationNots.webp"}
            alt="station img"
            className="max-w-16 rounded-[50%]   max-h-16"
          />
          <div>
            <div className="flex items-center  lg:justify-start   sm:gap-4">
              <img
                src="/markedremoved.png"
                className="md:w-8 w-6 filter drop-shadow-2xl  h-6 md:h-8"
                alt="location mark"
              />
              <h3 className="text-lg md:text-xl  font-semibold text-primary-dark">
                Car Wash Point
              </h3>
            </div>
            <p className="text-gray-600">{point.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StationCardSec;
