import { Navigate } from "react-router-dom";
import { useAuthInStore } from "../../hooks/useAuthInStore";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useAuthInStore();

  return isLoggedIn ? children : <Navigate to="/logIn"></Navigate>;
};

export default PrivateRoute;
