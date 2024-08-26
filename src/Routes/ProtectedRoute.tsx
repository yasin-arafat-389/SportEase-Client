import { ReactNode } from "react";
import { useCurrentToken } from "../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../Redux/hooks";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../Utils/verifyToken";

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

  if (role !== undefined && role !== user?.role) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
