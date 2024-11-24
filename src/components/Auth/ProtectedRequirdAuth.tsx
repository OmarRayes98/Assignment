import { useAppSelector } from "@/store/hook";
import { Navigate } from "react-router-dom";

const ProtectedRequirdAuth = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default ProtectedRequirdAuth;
