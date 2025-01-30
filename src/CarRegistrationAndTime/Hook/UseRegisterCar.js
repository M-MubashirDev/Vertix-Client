import { useMutation } from "@tanstack/react-query";
import { postCarRegister } from "../../Services/CarRegistration";

export default function useCarDetailsSubmit() {
  const { mutate: submitCarDetailsMutate, isPending: submitPending } =
    useMutation({
      mutationFn: postCarRegister,
      onSuccess: () => {
        console.log("Car details submitted successfully.");

        // Optionally display a success toast or other UI feedback
      },
      onError: () => {
        console.log("Failed to submit car details.");
        // Optionally display an error toast or other UI feedback
      },
    });

  return { submitCarDetailsMutate, submitPending };
}
