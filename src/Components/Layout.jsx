import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
