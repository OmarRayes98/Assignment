import { useAppSelector } from "@/store/hook";
import { Navigate } from "react-router-dom";

const ProtectedRequiredUnAuth = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  //if login before . can't go to login page  until logout
  if (token) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRequiredUnAuth;
