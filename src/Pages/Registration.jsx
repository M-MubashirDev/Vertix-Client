import CustomForm from "../Components/Form";
import BackButton from "../UI/BackButton";
import { useRegistration } from "../UserRegistration/Hook/useRegitration";

function Register() {
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
    mutateRegister({ url: "create-admin", data });
  }
  return (
    <div className="mt-8">
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

          <CustomForm.ButtonSubmit>Sign In</CustomForm.ButtonSubmit>
        </CustomForm>
      </div>
    </div>
  );
}

export default Register;
