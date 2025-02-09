// import { GoPaperAirplane } from "react-icons/go";
import { useContectus } from "../Contectus/useContect";
import Form from "../Components/Form";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const { postContect, postPending } = useContectus();
  const HandleSubmit = (data) => {
    postContect({ data });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: "url('try.jpg')", // Replace with your background image URL
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="max-w-[1440px] w-[90%] mx-auto ">
        <div className="relative z-10 lg:max-w-[60%]  flex flex-col text-center md:text-start justify-start  py-16 px-6 text-white">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg mb-8">
            Have questions or need support? Please fill out the form below, and
            we&apos;ll get back to you as soon as possible.
          </p>

          {/* Form */}
          <Form onSubmit={HandleSubmit}>
            <Form.Input
              label="Your Name"
              name="name"
              validation={{
                required: "Name is required",
              }}
            />
            <Form.Input
              label="Email Address"
              name="email"
              type="email"
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email address",
                },
              }}
            />
            <Form.TextArea
              label="Your Message"
              name="message"
              validation={{
                required: "Message is required",
              }}
            />
            <div className="flex gap-4  items-center">
              <Form.ButtonSubmit isSubmitting={postPending}>
                <span className="flex items-center   justify-center gap-3">
                  Send Message <HiOutlinePaperAirplane />
                </span>
              </Form.ButtonSubmit>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full font-semibold  bg-gray-300 hover:text-gray-300 text-gray-800 py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
