function StationCardSec({ title, points }) {
  return (
    <div className="max-w-fit    w-full mx-auto p-6 flex flex-wrap  justify-center   gap-4">
      {points.map((point, index) => (
        <div
          key={index}
          className=" cursor-pointer  filter drop-shadow-md rounded-lg p-4"
        >
          <div className="flex items-center justify-cente lg:justify-start   sm:gap-4">
            <img
              src="/markedremoved.png"
              className="md:w-8 w-6 filter drop-shadow-2xl  h-6 md:h-8"
              alt="location mark"
            />
            <h3 className="text-lg md:text-xl  font-semibold text-primary-dark">
              {point.type}
            </h3>
          </div>
          <p className="text-gray-600">{point.address}</p>
        </div>
      ))}
    </div>
  );
}

export default StationCardSec;
