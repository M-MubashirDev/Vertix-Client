import { IoIosSearch } from "react-icons/io";
import BackButton from "../UI/BackButton";
import ExpandableButton from "../UI/ExpandableButton";

export default function CarWashComponent() {
  return (
    <div className="bg-background  p-4">
      <div className="ml-24 mt-6">
        <BackButton />
      </div>
      <div className="w-full h-screen flex flex-col mt-6 items-center text-center">
        <h1 className="text-4xl font-bold text-primary-dark">
          THE BETTER WAY TO{" "}
          <span className="text-primary-light">WASH YOUR CAR</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-primary-dark mt-4">
          The App For Affordable & Unlimited Car Washes
        </p>

        {/* Input and Button */}
        <div className="mt-6 flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter ZIP Code"
            className="px-4 py-2 text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light"
          />
          {/* <button className="px-6 py-2 bg-primary-light text-white text-lg rounded-full hover:bg-primary-dark hover:text-background transition-all">
            Find a Car Wash
            </button> */}
          <ExpandableButton
            text="Car Wash"
            w="50px"
            h="50px"
            hoverH="135px"
            icon={<IoIosSearch color="white" />}
          />
        </div>
        <img src="locationRemoved.png" alt="" />

        {/* Carousel */}
      </div>
    </div>
  );
}
