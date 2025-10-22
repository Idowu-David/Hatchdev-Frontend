import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) return <Outlet />;
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
