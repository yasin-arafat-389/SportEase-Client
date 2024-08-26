import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Dashborad/Sidebar";
import SideDrawer from "../Components/Dashborad/SideDrawer";

const DashboardLayout = () => {
  return (
    <div className=" pt-4">
      <div className=" w-[90%] mx-auto  ">
        {/* Top Banner */}
        <div
          className="flex items-center justify-center bg-blue-500 text-white px-6 py-3.5 rounded 
          font-[sans-serif] mb-4 pt gap-5"
        >
          <p className="text-base">Welcome to your Dashboard</p>

          <div className="block md:block lg:hidden cursor-pointer">
            <SideDrawer />
          </div>
        </div>

        <div className="flex gap-5 ">
          <Sidebar />
          <div className="w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
