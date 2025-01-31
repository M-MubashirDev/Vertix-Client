import { useNavigate } from "react-router-dom";
import { getAuthData } from "../Hooks/useSecurity";
import HeadingWithAnimation from "../UI/HeadingWithAnimation";
import AnimatedProfileBar from "../UserLanding/Hooks/ProfileBar";
import useRegisterCar from "../UserLanding/Hooks/useUserLanding";
import AnimatedCarCard from "../UserLanding/RegisterBar";
import { useMemo } from "react";
import FullPageSpinner from "../UI/Spinner";

function UserLanding() {
  const { user } = getAuthData();
  const { RegisterCarData, pendingRegisterCar } = useRegisterCar();

  // Filter registered cars for the logged-in user
  const userRegister = useMemo(() => {
    return RegisterCarData?.filter((val) => val?.userId?._id === user.id);
  }, [RegisterCarData, user.id]);

  // Navigate to "newcar" if no registered cars are found
  // useEffect(() => {
  //   if (userRegister && userRegister.length === 0) {
  //     navigate("newcar");
  //   }
  // }, [userRegister, navigate]);

  // Show spinner while loading data
  if (pendingRegisterCar) return <FullPageSpinner />;

  return (
    <div className="py-12 mx-auto w-[90%] max-w-[1440px]">
      <div className="flex flex-col gap-6">
        <HeadingWithAnimation user={user} />
        <AnimatedProfileBar user={user} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {userRegister?.map((car) => (
            <AnimatedCarCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserLanding;
