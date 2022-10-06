import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/User/selectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const navigate = useNavigate();
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>{shouldRedirect ? navigate(`/`) : children}</Route>
  );
}
