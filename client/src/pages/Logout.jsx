import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Logout = () => {
  const { LogoutUser } = useAuth();
  useEffect(() => {
    LogoutUser();
    // toast.success("Logout successful!");
  }, [LogoutUser]);


  return (
    <Navigate to="/login" replace={true} />
  );
}

export default Logout;