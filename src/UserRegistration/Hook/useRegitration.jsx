import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postRegistration } from "../../Services/RegistrationUser";
import { useNavigate } from "react-router-dom";

export function useRegistration() {
  const navigate = useNavigate();

  const {
    mutate: mutateRegister,
    isLoading: isPending,
    isSuccess,
  } = useMutation({
    mutationFn: postRegistration,
    onSuccess: () => {
      toast.success("Regitration successfull created");
      navigate("/cardetails");
    },
    onError: (error) => {
      toast.error("Please Try Again: " + error.message);
      console.error("Payment Error:", error);
    },
  });

  return { mutateRegister, isPending, isSuccess };
}
