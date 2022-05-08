import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts";

export function RequiresAuth({ children }) {
  const { currentUser } = useAuth();

  const location = useLocation();

  return currentUser.id ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
