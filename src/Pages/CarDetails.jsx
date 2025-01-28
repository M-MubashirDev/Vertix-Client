import CarRegistrationForm from "../CarRegistrationAndTime.jsx/CarRegistrationForm";
// import { Time } from "../ServicesPage/Time";
import BackButton, { ForwardButton } from "../UI/BackButton";

function CarDetails() {
  const selectedStation = JSON.parse(sessionStorage.getItem("selectedStation"));
  return (
    <div className="max-w-[1440px] mx-auto w-[90%] text-center md:text-start flex flex-col">
      <div className="flex relative items-center flex-col">
        {/* Heading and Back/Forward Buttons */}
        <div className=" pt-8   flex flex-col items-center">
          <div className="   absolute left-0 top-4 md:opacity-100 opacity-0 ">
            <BackButton />
          </div>
          <div className="   md:absolute mt-3 md:mt-0 mb-4 md:mb-0 right-0 top-4 ">
            <ForwardButton
              latitude={selectedStation?.latitude}
              longitude={selectedStation?.longitude}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="lg:text-2xl md:text-xl text-lg text-primary tracking-widest">
              Car Details
            </h2>
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4 font-bold text-primary-dark">
              Enter Your Vehicle Information
            </h1>
            <p className="font-semibold tracking-wider text-xl mb-8">
              &quot;Every detail matters, your car’s story begins here.&quot;
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="w-full">
          <CarRegistrationForm />
        </div>

        {/* Calendar */}
      </div>
      {/* <div className=" ">
        <Time />
      </div> */}
    </div>
  );
}

export default CarDetails;

// import CarRegistrationForm from "../CarRegistrationAndTime.jsx/CarRegistrationForm";
// import Time from "../ServicesPage/Time";
// import BackButton, { ForwardButton } from "../UI/BackButton";

// function CarDetails() {
//   return (
//     <section className="max-w-[1440px] mx-auto w-[90%] flex flex-col">
//       <div className="min-h-screen flex flex-col">
//         {/* Heading and Back/Forward Buttons */}
//         <div className="relative pt-8">
//           <div className="absolute left-12 top-8">
//             <BackButton />
//           </div>
//           <div className="absolute right-12 top-8">
//             <ForwardButton />
//           </div>
//           <div className="flex flex-col items-center">
//             <h2 className="lg:text-2xl md:text-xl text-lg text-primary tracking-widest">
//               Car Details
//             </h2>
//             <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4 font-bold text-primary-dark">
//               Enter Your Vehicle Information
//             </h1>
//             <p className="font-semibold tracking-wider text-xl mb-8">
//               "Every detail matters, your car’s story begins here."
//             </p>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="w-full">
//           <CarRegistrationForm />
//         </div>

//         {/* Calendar */}
//         <div className="w-full">
//           <Time />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CarDetails;
// const { timeData, pendingTime } = UserServiceTime(); // Fetch service time data
//   const { shopTimingData, pendingShopTiming } = useShopTiming();
//   console.log(shopTimingData);
