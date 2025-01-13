import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";
import Login from "../Services/Login";

function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useMutation({
    mutationFn: Login,
    onSuccess: () => {
      toast.success("Login successful!");
      navigate("/");
    },
    onError: (error) => {
      toast.error("Login failed. Please try again.");
      console.error("Login failed:", error);
    },
  });
  return { loginMutate };
}

export default useLogin;
