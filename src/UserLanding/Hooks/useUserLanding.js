import { useQuery } from "@tanstack/react-query";
import { getAllCarRegister } from "../../Services/RegistrationUser";

function useRegisterCar() {
  const {
    data: RegisterCarData,
    isPending: pendingRegisterCar,
    error,
  } = useQuery({
    queryKey: ["getRegisterData"],
    // queryFn: () => getRegisterCar({ url: `get-packages-by-station/${stationId}` }),
    queryFn: () =>
      getAllCarRegister({
        url: `get-car-registrations
    `,
      }),
  });
  return { RegisterCarData, pendingRegisterCar, error };
}

export default useRegisterCar;
