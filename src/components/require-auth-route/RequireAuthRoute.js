import { Navigate } from "react-router-dom";
import useAuth from "useAuth";

function RequireAuthRoute({ children }) {
  const isUserLoggedIn = useAuth();
  return isUserLoggedIn ? children : <Navigate to={"/"} />;
}

export default RequireAuthRoute;
