import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postRegistration } from "../../Services/RegistrationUser";

export function useRegistration() {
  const {
    mutate: mutateRegister,
    isLoading: isPending,
    isSuccess,
  } = useMutation({
    mutationFn: postRegistration,
    onSuccess: () => {
      toast.success("Regitration successfull created");
    },
    onError: (error) => {
      toast.error("Please Try Again: " + error.message);
      console.error("Payment Error:", error);
    },
  });

  return { mutateRegister, isPending, isSuccess };
}
