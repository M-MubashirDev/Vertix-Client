import { useNavigate } from "react-router-dom";
import CustomForm from "../Components/Form";
import BackButton from "../UI/BackButton";
import { useRegistration } from "../UserRegistration/Hook/useRegitration";

function Register() {
  const navigate = useNavigate();
  const { mutateRegister, isPending: newAdminPend } = useRegistration();

  function submitFunc(values) {
    if (!values) return;
    console.log(values.profileImage);
    const data = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      image: "",
      password: values.password,
      cellno: values.number,
    };
    mutateRegister({ url: "register", data });
  }
  return (
    <div className="mt-8 max-w-[1440px] mx-auto w-[90%]">
      <BackButton />
      <div className="mt-8">
        <CustomForm onSubmit={submitFunc}>
          {/* Email Input */}
          <CustomForm.Input
            label="First Name"
            name="firstname"
            type="text"
            validation={{
              required: "Name  is required",
            }}
          />
          <CustomForm.Input label="Last Name" name="lastname" type="text" />

          <CustomForm.Input
            label="Email Address"
            name="email"
            type="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            }}
          />

          {/* Password and Confirm Password Inputs */}
          <CustomForm.PasswordInput label="Password" name="password" />
          <CustomForm.ConfirmPasswordInput
            label="Confirm Password"
            name="confirmPassword"
            confirmName="password"
          />
          <CustomForm.Input
            label="Phone"
            name="number"
            type="Number"
            validation={{
              required: "Phone Number  is required",
            }}
          />
          <CustomForm.Input
            label="Business Name"
            name="company"
            type="text"
            validation={{
              required: "Business Name  is required",
            }}
          />
          <CustomForm.FileInput
            label="Upload Image"
            name="profileImage"
            accept="image/*"
            // validation={{
            //   required: "Image is required",
            //   validate: (value) =>
            //     value.size < 5 * 1024 * 1024 || "File must be less than 5MB",
            // }}
          />

          {/* <CustomForm.ButtonSubmit>Register</CustomForm.ButtonSubmit> */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:max-w-[50rem]">
            <CustomForm.ButtonSubmit isSubmitting={newAdminPend}>
              Register
            </CustomForm.ButtonSubmit>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-xl hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </CustomForm>
        <h2 className="text-center mb-4 -mt-2">
          Already have account?
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 ml-2"
          >
            Login
          </button>{" "}
        </h2>
      </div>
    </div>
  );
}

export default Register;
