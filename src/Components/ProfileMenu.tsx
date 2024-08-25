import { useNavigate } from "react-router-dom";
import { logout, selectCurrentUser } from "../Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useState } from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BsChevronDown } from "react-icons/bs";
import toast from "react-hot-toast";
import { MdDashboard } from "react-icons/md";

const ProfileMenu = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  console.log(user);

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("Logged out successfully!");
  };

  const profileMenuItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard fontSize={"20px"} />,
      action: goToDashboard,
    },

    {
      label: "Sign Out",
      icon: <AiOutlinePoweroff fontSize={"20px"} />,
      action: handleLogout,
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto outline-none"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src={"https://i.ibb.co/HN9NtYY/user.png"}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <BsChevronDown
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>

        <MenuList
          className="p-1 overflow-hidden"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {profileMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              onClick={item.action}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex items-center gap-4 text-[15px] font-bold">
                <span>{item.icon}</span>
                {item.label}
              </div>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
