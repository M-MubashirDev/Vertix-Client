// import { useQuery } from "@tanstack/react-query";
// import { getStations } from "../../Services/Stations";
// import { useParams } from "react-router-dom";

// function UseStations() {
//   const { cityName } = useParams();
//   const {
//     data: stationsData,
//     isPending: pendingStations,
//     error,
//   } = useQuery({
//     queryKey: ["Stations"],
//     queryFn: () =>
//       getStations({
//         url: `get-service-stations-by-location/${cityName}`,
//       }),
//   });
//   return { stationsData, pendingStations, error };
// }

// export default UseStations;
import { useQuery } from "@tanstack/react-query";
import { getStations } from "../../Services/Stations";

function UseStations() {
  const {
    data: stationsData,
    isPending: pendingStations,
    error,
  } = useQuery({
    queryKey: ["Allstations"],
    queryFn: () =>
      getStations({
        url: `service-stations`,
      }),
  });

  return { stationsData, pendingStations, error };
}

export default UseStations;
