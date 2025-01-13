import { useQuery } from "@tanstack/react-query";
import { getStations } from "../../Services/Stations";

function UseStations() {
  const {
    data: stationsData,
    isPending: pendingStations,
    error,
  } = useQuery({
    queryKey: ["Stations"],
    queryFn: () => getStations({ url: "get-service-stations" }),
  });
  return { stationsData, pendingStations, error };
}

export default UseStations;
