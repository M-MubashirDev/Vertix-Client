import { useMutation } from "@tanstack/react-query";
import { Contectus } from "../Services/Contectus";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
export function useContectus() {
  const { mutate: postContect, isPending: postPending } = useMutation({
    mutationFn: Contectus,
    onSuccess: () => {
      console.log("success");
      toast.success("Sucess");
    },
    onError: () => {
      console.log("error");
      toast.error("Can't Submit");
    },
  });
  return { postContect, postPending };
}
