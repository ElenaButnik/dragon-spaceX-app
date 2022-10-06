import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/User/reducers";
import { getIsLoggedIn } from "../../redux/User/selectors";
import { removeDragon } from "../../redux/myDragons/reducers";
import { ReactComponent as Logo } from '../../images/logo.svg';

import s from "./Navigation.module.css";

export function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleClick = (dragons) => {
    dispatch(removeUser());
    dispatch(removeDragon(dragons));
    navigate(`/`);
  };

  return (
    <>
      <header className={s.header}>
        <div className={s.headerInner}>
          <nav className={s.nav}>
            <NavLink to="/" className={s.title}>
                      <Logo style={{width: 200, height: 40}}/>
            </NavLink>
            <ul className={s.list}>
              {isLoggedIn ? (
                <>
                  <li className={s.item}>
                    <NavLink to="/" className={s.navLink}>
                      Home
                    </NavLink>
                  </li>
                  <li className={s.item}>
                    <NavLink to="/about" className={s.navLink}>
                      About
                    </NavLink>
                  </li>
                  <li className={s.item}>
                    <NavLink to="/dragons" className={s.navLink}>
                      Dragons
                    </NavLink>
                  </li>

                  <li className={s.item}>
                    <NavLink to="/profile" className={s.navLink}>
                      Profile
                    </NavLink>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>

          {isLoggedIn ? (
            <button className={s.Btn} onClick={handleClick}>
              Log out
            </button>
          ) : null}
        </div>
      </header>
    </>
  );
}
