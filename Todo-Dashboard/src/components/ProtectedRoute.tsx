import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { useNavigate, Navigate } from "react-router-dom";


const ProtectedRoute = () => {
	const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
	const navigate = useNavigate()

	return <Outlet />;	
};

export default ProtectedRoute;
