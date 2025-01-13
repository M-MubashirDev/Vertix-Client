import CarWashServicesCard from "../Location/CarWashServicesCard";
import useServices from "../Location/hook/UserServices";

function Services() {
  const basicPlan = {
    title: "Basic Plan",
    price: 19.99,
    services: [{ name: "Exterior Wash", available: true }],
  };

  const premiumPlan = {
    title: "Premium Plan",
    price: 39.99,
    services: [
      { name: "Interior Cleaning", available: true },
      { name: "Exterior Wash", available: true },
      { name: "Tire Shine", available: true },
      { name: "Wax Coating", available: true },
    ],
  };
  const { servicesData, pendingServices } = useServices();
  console.log(servicesData);
  if(pendingServices)return <Spinner
  return (
    <div className="space-y-8">
      {servicesData?.map((service) => (
        <CarWashServicesCard key={service._id} service={service} />
      ))}
    </div>
  );
}

export default Services;
