import { Outlet } from "react-router-dom";

function ProtectedWraper() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedWraper;
