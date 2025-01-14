import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../Services/Services";
import { useParams } from "react-router-dom";
function useServices() {
  // http://localhost:5000/api/get-packages-by-station/67861f2b7f7caef48ef3d35b

  const { serviceId } = useParams();
  const {
    data: servicesData,
    isPending: pendingServices,
    error,
  } = useQuery({
    queryKey: ["Services"],
    // queryFn: () => getServices({ url: `get-packages-by-station/${serviceId}` }),
    queryFn: () =>
      getServices({
        url: `get-packages-by-station/67861f2b7f7caef48ef3d35b
`,
      }),
  });
  return { servicesData, pendingServices, error };
}

export default useServices;
