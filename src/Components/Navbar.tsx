import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import logo from "../Assets/logo.png";
import { useAppSelector } from "../Redux/hooks";
import { selectCurrentUser } from "../Redux/Features/Auth/authSlice";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const user = useAppSelector(selectCurrentUser);

  return (
    <div className="flex justify-between items-center bg-primary py-3 px-10 md:px-10 lg:px-20 shadow-xl sticky top-0 z-20">
      <img
        onClick={() => navigate("/")}
        src={logo}
        className="w-[180px] md:w-[170px] lg:w-[230px] cursor-pointer"
      />

      <div className="hidden md:hidden lg:flex gap-7 justify-center items-center text-lg font-bold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about-us"}>About Us</NavLink>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
        <NavLink to={"/facilities"}>Facilities</NavLink>

        {user ? (
          <div>
            <ProfileMenu />
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="cursor-pointer transition-all bg-button text-white px-4 py-1 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
              Login
            </button>
          </Link>
        )}
      </div>

      <div className="flex md:flex lg:hidden">
        <GiHamburgerMenu
          size={"20"}
          className="cursor-pointer"
          onClick={openDrawer}
        />
      </div>

      <Drawer
        overlay={false}
        open={open}
        onClose={closeDrawer}
        className="p-4 w-[180px]"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-6 flex flex-col items-center justify-between">
          <img src={logo} className="w-[150px] mb-7" />

          <div className="flex flex-col gap-4 text-center">
            <NavLink onClick={closeDrawer} to={"/"}>
              Home
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/about-us"}>
              About Us
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/contact-us"}>
              Contact Us
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/facilities"}>
              Facilities
            </NavLink>

            {user ? (
              <div>
                <ProfileMenu />
              </div>
            ) : (
              <Link onClick={closeDrawer} to={"/login"}>
                <button className="cursor-pointer transition-all bg-button text-white px-4 py-1 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
