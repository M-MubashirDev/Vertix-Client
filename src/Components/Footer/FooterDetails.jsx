import FooterText from "./FooterText";
function FooterDetails() {
  return (
    <div className="grid mt-20   lg:grid-cols-[16%_1fr] min-w-full ">
      <img
        src="logo2.png"
        alt="logo"
        className="lg:min-w-full lg:min-h-full p-2 justify-self-center"
      />
      <div className="grid grid-cols-2 gap-6 py-6 px-4 lg:pl-8 md:grid-cols-4 bg-primary-dark justify-center    place-content-center ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-4 px-4  justify-center place-content-center"> */}
        <FooterText>
          <FooterText.Heading>OPEN DAILY</FooterText.Heading>
          <FooterText.ListItem>Mon-Fri - 1:30pm-6:30pm</FooterText.ListItem>
          <FooterText.ListItem>
            Saturday - By Appointment Only
          </FooterText.ListItem>
          <FooterText.ListItem>Sunday - CLOSED</FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>ADDRESS</FooterText.Heading>
          <FooterText.ListItem>220 N Walnut St</FooterText.ListItem>
          <FooterText.ListItem>Bloomington</FooterText.ListItem>
          <FooterText.ListItem> IN </FooterText.ListItem>
          <FooterText.ListItem> United States </FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>QUICK LINKS</FooterText.Heading>
          <FooterText.ListItem link="/">Home</FooterText.ListItem>
          <FooterText.ListItem link="/about">About Us</FooterText.ListItem>
          <FooterText.ListItem link="/contact">Contact Us</FooterText.ListItem>
          <FooterText.ListItem link="bookings">
            Book Appointment
          </FooterText.ListItem>
        </FooterText>
        <FooterText>
          <FooterText.Heading>CONTACT</FooterText.Heading>
          <FooterText.ListItem>+1 812-336-0092</FooterText.ListItem>
          <FooterText.ListItem>
            hotrodbrbr<span className="inline-block">@yahoo.com</span>
          </FooterText.ListItem>
          <div className="flex gap-4 sm:gap-8 my-2 ml:4 sm:ml-6">
            <FooterText.Logotext src="logo2.png" />
            <FooterText.Logotext src="logo2.png" />
          </div>
        </FooterText>
      </div>
    </div>
  );
}

export default FooterDetails;
{
  /* <div className="h-screen bg-white grid  text-center md:text-start md:gap-20  md:grid-cols-2  px-4 items-center justify-center max-w-[1440px] mx-auto w-[90%]">
<div className="flex flex-col items-center md:items-start">
  <h1 className="lg:text-5xl md:text-4xl text-3xl text-primary-light py-6 font-semibold">
    Are You Busy
  </h1>
  <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-7">
    Life can get busy, but we make it easier for you. Don’t worry
    about your car’s cleanliness — let us handle it while you focus
    on what matters. Trust Vertix to keep your car spotless, so you
    can enjoy more of life without the hassle.
  </p>
  <img
    src="carwashs.png"
    alt="Car Wash"
    className="sm:max-w-[50%] max-w-[80%] py-3 md:py-10 md:max-w-full"
  />
</div>
<div className="flex flex-col-reverse md:block items-center">
  <img
    src="ways.png"
    alt="Ways"
    className="filter grayscale-[20%] hover:grayscale-0 transition-all sm:max-w-[50%] max-w-[80%] md:max-w-fit  duration-300"
  />
  <div>
    <h1 className="lg:text-5xl md:text-4xl text-3xl text-primary-light md:py-10 py-3 font-semibold">
      Make Your Life Easy
    </h1>
    <p className="text-[16px] lg:text-xl line-clamp-6 sm:text-lg text-gray-500 max-w-[90%] lg:max-w-[50%] mb-2">
      Let us handle the cleaning, so you can enjoy a spotless car
      without lifting a finger. Contact Vertix today, and let’s make
      your life easier! Need a quick wash? We offer fast and
      efficient services to keep your car looking great in no time!
    </p>
  </div>
</div>
</div> */
}
