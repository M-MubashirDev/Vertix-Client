import CarWashServicesCard from "../Location/CarWashServicesCard";
import useServices from "../Location/hook/UserServices";
import BackButton, { ForwardButton } from "../UI/BackButton";
import FullPageSpinner from "../UI/Spinner";

function Services() {
  const { servicesData, pendingServices } = useServices();
  const selectedStation = JSON.parse(sessionStorage.getItem("selectedStation")); // The selected station with latitude and longitude

  if (pendingServices) return <FullPageSpinner />;

  return (
    <section className="max-w-[1440px] mx-auto w-[90%]">
      <div className="min-h-screen">
        <div className="relative pt-8 flex flex-col items-center">
          <div className="absolute left-12 top-8 md:opacity-100 opacity-0">
            <BackButton />
          </div>
          <div className="md:absolute mt-3 md:mt-0 mb-4 md:mb-0 right-12 top-8">
            <ForwardButton
              latitude={selectedStation?.latitude}
              longitude={selectedStation?.longitude}
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="lg:text-2xl md:text-xl text-lg text-primary tracking-widest">
              Washing Price
            </h2>
            <h1 className="lg:text-4xl md:text-3xl text-2xl mb-4 font-bold text-primary-dark">
              Choose Your Plan
            </h1>
            <p className="font-semibold tracking-wider text-center text-xl mb-8">
              &quot;Care that dazzles, plans that fit, Choose your shine, this
              is it.&quot;
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {servicesData && servicesData.length > 0 ? (
              servicesData.map((service) => (
                <CarWashServicesCard key={service._id} service={service} />
              ))
            ) : (
              <p className="text-center text-gray-500">
                There are no packages available.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
