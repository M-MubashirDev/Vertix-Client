import Form from "../Components/Form";
import { useCarDetailsSubmit } from "./Hook/useRegisterCar";

function CarRegistrationForm() {
  const { submitCarDetailsMutate, submitPending } = useCarDetailsSubmit();
  const onSubmit = (data) => {
    // Handle form submission
    console.log("Submitted Data:", data);
    submitCarDetailsMutate({ data });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input
        label="Car Name"
        name="carName"
        validation={{ required: "Car Name is required" }}
      />
      <Form.Input
        label="Car Model"
        name="carModel"
        validation={{ required: "Car Model is required" }}
      />
      <Form.Input
        label="Car Color"
        name="carColor"
        validation={{ required: "Car Color is required" }}
      />
      <Form.Input
        label="Car Number"
        name="carNumber"
        validation={{ required: "Car Number is required" }}
      />
      <Form.Input
        label="Owner Name"
        name="ownerName"
        validation={{ required: "Owner Name is required" }}
      />
      <Form.Input
        label="Owner Address"
        name="ownerAddress"
        validation={{ required: "Owner Address is required" }}
      />
      <Form.Input
        label="CNIC"
        name="cnic"
        validation={{ required: "CNIC is required" }}
      />
      <Form.ButtonSubmit>Submit</Form.ButtonSubmit>
    </Form>
  );
}

export default CarRegistrationForm;
