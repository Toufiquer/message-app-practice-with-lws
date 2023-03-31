import { Navigate } from "react-router-dom";

import { useAuthInStore } from "../../hooks/useAuthInStore";

const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuthInStore();

  return !isLoggedIn ? children : <Navigate to="/"></Navigate>;
};

export default PublicRoute;
