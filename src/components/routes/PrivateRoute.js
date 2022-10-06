import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/User/selectors";

export default function PrivateRoute({
  
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
    const navigate = useNavigate();

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children :  navigate(`/`) }
    </Route>
  );
}