import { useQuery } from "@tanstack/react-query";
import { getStations } from "../../Services/Stations";
import { useParams } from "react-router-dom";

function UseStations() {
  const { stationId } = useParams();
  const {
    data: stationsData,
    isPending: pendingStations,
    error,
  } = useQuery({
    queryKey: ["Stations"],
    queryFn: () =>
      getStations({
        url: `get-service-stations-by-location/${stationId}`,
      }),
  });
  return { stationsData, pendingStations, error };
}

export default UseStations;
