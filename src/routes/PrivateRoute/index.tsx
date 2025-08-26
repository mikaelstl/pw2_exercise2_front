import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface PrivateRouteProps {
  children: React.ReactNode
}

export function PrivateRoute(props: PrivateRouteProps) {
  const { user } = useAuth();

  return user ? props.children : <Navigate to="/" />;
}