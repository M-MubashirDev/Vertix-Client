import FooterDetails from "../Components/Footer/FooterDetails";
import CarWashComponent from "../Components/Location/PostCode";
import Carousel from "../UI/Carousel";
function LocationPoster() {
  return (
    <section className="bg-background ">
      <CarWashComponent />
      <div className=" mb-8 text-6xl">
        <h1 className="text-4xl mb-4 font-bold text-center text-primary-light">
          Steps To Start
        </h1>
        <Carousel />
      </div>
      <section className="">
        <FooterDetails />
      </section>
    </section>
  );
}

export default LocationPoster;
