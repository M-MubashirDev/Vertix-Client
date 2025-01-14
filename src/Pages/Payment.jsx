import BackButton from "../UI/BackButton";

function Payment() {
  return (
    <div className="min-h-screen bg-neutral-light">
      <header className="text-center py-6 bg-primary-dark text-white">
        <h1 className="text-3xl font-bold">Complete Your Booking</h1>
        <p className="text-sm text-neutral-light mt-2">
          Enter your car details and payment information to finalize your
          booking.
        </p>
      </header>
      <div className="max-w-[1440px] mx-auto w-[90x]">
        <div className="mt-4  ml-2">
          <BackButton />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-8">
          <div className="bg-white shadow-md rounded-lg p-6"></div>

          <div className="bg-white shadow-md rounded-lg p-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
