import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getShopTiming } from "../../Services/CarRegistration";

function useShopTiming() {
  const { stationId } = useParams();

  const {
    data: shopTimingData,
    isPending: pendingShopTiming,
    error,
  } = useQuery({
    queryKey: ["shopTime", stationId], // Use stationId as part of query key for better caching
    queryFn: () =>
      getShopTiming({ url: `get-all-station-timings/${stationId}` }),
  });

  return { shopTimingData, pendingShopTiming, error };
}

export default useShopTiming;
