import { ReactNode } from "react";
import { logout, useCurrentToken } from "../Redux/Features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../Utils/verifyToken";
import toast from "react-hot-toast";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  console.log(user);

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    toast.error("You must login first!");
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
