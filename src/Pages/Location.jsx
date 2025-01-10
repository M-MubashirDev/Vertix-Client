import FooterDetails from "../Components/Footer/FooterDetails";
import CarWashComponent from "../Components/Location/PostCode";
import Carousel from "../UI/Carousel";

export default function Location() {
  return (
    <section className="bg-background ">
      <CarWashComponent />
      <div className="my-12 ">
        <Carousel />
      </div>
      <section className="">
        <FooterDetails />
      </section>
    </section>
  );
}
