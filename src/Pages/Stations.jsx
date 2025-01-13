// import UseStations from "../Location/hook/UseStations";
import UseStations from "../Location/hook/UseStations";
import Map from "../Location/Map";
import StationCardSec from "../Location/StationCardSec";
import Spinner from "../UI/Spinner";

function Stations() {
  const stations = [
    {
      type: "Car Washing Point",
      address: "1353 Locust St, Kansas City, MO 64106",
    },
    { type: "Service Point", address: "754 Adams Avenue, Waldorf, MD 20601" },
    {
      type: "Auto Care Point",
      address: "4595 Parkview Drive, Sacramento, CA 83209",
    },
  ];
  const { stationsData, pendingStations } = UseStations();
  console.log(stationsData);
  if (pendingStations) return <Spinner />;
  // console.log(stationsData);
  return (
    <div
      style={{ maxHeight: "calc(100vh - 83.2px)" }}
      className="flex flex-col lg:flex-row    max-w-[1440px] mx-auto w-[99%] "
    >
      <div className="lg:flex-1 max-w-[1440px]  w-[90%] mx-auto flex flex-col pl-4  py-10 relative">
        {/* Background Image with Overlay */}
        <div
          style={{
            backgroundImage: "url('/tastejj.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.13, // Adjust this value to make the image duller or more transparent
          }}
        />
        <div
          className="min-w-full min-h-full h-full flex flex-col w-full"
          style={{ position: "relative", zIndex: 1 }}
        >
          {" "}
          {/* Ensure content is above the background */}
          <h2 className="lg:text-3xl md:text-2xl text-xl   text-primary tracking-widest mb-6">
            <span className="tracking-normal">&#8212;&#8211;</span>
            &nbsp;&nbsp;LOCATION
          </h2>
          <h1 className="lg:text-5xl md:text-4xl  text-3xl font-bold text-primary-dark mb-4">
            Car Washing and Care Points
          </h1>
          <StationCardSec points={stations} stationsData={stationsData} />
          {/* <img
            src="/s.png"
            alt="Car"
            className="max-w-[30%] opacity-30 mt-auto"
          /> */}
        </div>
      </div>
      <div
        style={{ maxHeight: "calc(100vh - 83.2px)" }}
        className="lg:flex-1 lg:max-w-[30%]   lg:min-h-full"
      >
        <Map />
      </div>
    </div>
  );
}

export default Stations;
