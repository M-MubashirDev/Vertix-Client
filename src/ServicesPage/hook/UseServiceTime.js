import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../Services/Services";
import { useParams } from "react-router-dom";

function UserServiceTime() {
  // https://vertix-nine.vercel.app/get-packages-by-station/67861f2b7f7caef48ef3d35b

  const { stationId } = useParams();
  const {
    data: timeData,
    isPending: pendingTime,
    error,
  } = useQuery({
    queryKey: ["time"],
    // queryFn: () => getServices({ url: `get-packages-by-station/${stationId}` }),
    queryFn: () =>
      getServices({
        url: `get-appointments-by-station/67861f2b7f7caef48ef3d35b
`,
      }),
  });
  return { timeData, pendingTime, error };
}
export default UserServiceTime;
