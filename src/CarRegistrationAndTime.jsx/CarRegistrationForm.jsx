import { useNavigate } from "react-router-dom";
import Form from "../Components/Form";
import { getAuthData } from "../Hooks/useSecurity";
import { useCarDetailsSubmit } from "./Hook/useRegisterCar";

function CarRegistrationForm() {
  const navigate = useNavigate();
  const { submitCarDetailsMutate, submitPending } = useCarDetailsSubmit();
  const serviceStationId = JSON.parse(
    sessionStorage.getItem("selectedStation")
  );
  const packageId = JSON.parse(sessionStorage.getItem("selectedPackage"));
  const { user } = getAuthData();
  // console.log(user.id, serviceStationId._id, packageId._id);
  const onSubmit = (datas) => {
    // Handle form submission
    console.log("Submitted Data:", {
      ...datas,
      userId: user.id,
      serviceStationId: serviceStationId._id,
      packageId: packageId._id,
    });
    submitCarDetailsMutate({
      data: {
        ...datas,
        userId: user.id,
        serviceStationId: serviceStationId._id,
        packageId: packageId._id,
      },
      url: "create-car-registration",
    });
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
