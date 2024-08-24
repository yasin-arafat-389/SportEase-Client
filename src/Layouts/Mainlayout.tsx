import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Mainlayout;
