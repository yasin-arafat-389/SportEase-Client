import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Drawer } from "@material-tailwind/react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../Assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="flex justify-between items-center bg-primary py-3 px-10 md:px-10 lg:px-20 shadow-xl sticky top-0 z-20">
      <img src={logo} className="w-[180px] md:w-[170px] lg:w-[230px]" />

      <div className="hidden md:hidden lg:flex gap-7 justify-center items-center text-lg font-bold">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/management"}>Management</NavLink>
        <NavLink to={"/cart"}>
          <HiOutlineShoppingBag size={"30"} />
        </NavLink>
      </div>

      <div className="flex md:flex lg:hidden">
        <GiHamburgerMenu
          size={"20"}
          className="cursor-pointer"
          onClick={openDrawer}
        />
      </div>

      <Drawer
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

            <NavLink onClick={closeDrawer} to={"/products"}>
              Products
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/management"}>
              Management
            </NavLink>

            <NavLink onClick={closeDrawer} to={"/cart"}>
              <HiOutlineShoppingBag size={"30"} />
            </NavLink>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
