import Form from "../Hooks/Form";

const Contact = () => {
  const handleSubmit = (data) => {
    console.log("Form Data Submitted:", data);
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
      <div className="relative z-10 max-w-[800px] mx-auto py-16 px-6 text-white">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-8">
          Have questions or need support? Please fill out the form below, and
          we&apos;ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <Form onSubmit={handleSubmit}>
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
          <Form.ButtonSubmit>Send Message</Form.ButtonSubmit>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
