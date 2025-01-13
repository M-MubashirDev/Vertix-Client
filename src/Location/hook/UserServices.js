import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../Services/Services";

function useServices() {
  const {
    data: servicesData,
    isPending: pendingServices,
    error,
  } = useQuery({
    queryKey: ["Services"],
    queryFn: () => getServices({ url: "get-packages" }),
  });
  return { servicesData, pendingServices, error };
}

export default useServices;
