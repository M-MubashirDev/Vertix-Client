import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" ? (
        <div>
          <Navbar />
        </div>
      ) : (
        ""
      )}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
