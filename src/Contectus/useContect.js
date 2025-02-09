import { useMutation } from "@tanstack/react-query";
import { Contectus } from "../Services/Contectus";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
export function useContectus() {
  const navigate = useNavigate();
  const { mutate: postContect, isPending: postPending } = useMutation({
    mutationFn: Contectus,
    onSuccess: () => {
      console.log("success");
      toast.success("Sucessfully Submitted");
      navigate("/");
    },
    onError: () => {
      console.log("error");
      toast.error("Can't Submit");
    },
  });
  return { postContect, postPending };
}
