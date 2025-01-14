import CarWashServicesCard from "../Location/CarWashServicesCard";
import useServices from "../Location/hook/UserServices";
import BackButton, { ForwardButton } from "../UI/BackButton";
import FullPageSpinner from "../UI/Spinner";
function Services() {
  const { servicesData, pendingServices } = useServices();

  if (pendingServices) return <FullPageSpinner />;
  return (
    <div className="min-h-screen  ">
      <div className="relative pt-8   flex flex-col items-center max-w-[1440px] mx-auto w-[90%]">
        <div className="   absolute left-12 top-8 ">
          <BackButton />
        </div>
        <div className="   absolute right-12 top-8 ">
          <ForwardButton />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="lg:text-2xl md:text-xl text-lg  text-primary tracking-widest ">
            Washing Price
          </h2>
          <h1 className="lg:text-4xl md:text-3xl  text-2xl mb-4  font-bold text-primary-dark">
            Choose Your Plan
          </h1>
          <p className="font-semibold tracking-wider   text-xl mb-8">
            &quot;Care that dazzles, plans that fit, Choose your shine, this is
            it.&quot;
          </p>
        </div>
        {servicesData?.map((service) => (
          <CarWashServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
