import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyDragonList } from "../../redux/myDragons/selectors";
import { removeDragon } from "../../redux/myDragons/reducers";
import picture from "../../images/nasa-dragon-spacex.webp";
import s from "./Profile.module.css";

export function Profile() {
  const dispatch = useDispatch();
  const dragons = useSelector(getMyDragonList);

  const handleClick = (dragons) => {
    dispatch(removeDragon(dragons));
  };

  return (
    <div className={s.Container}>
      <ul className={s.List}>
        {dragons?.map((item) => (
          <li key={item.id} className={s.Item}>
            <div className={s.Title}>{item.name}</div>
            <div className={s.Descr}>{item.description}</div>
          </li>
        ))}
      </ul>
      {dragons.length >= 1 ? (
        <button
          className={s.Btn}
          type="button"
          onClick={() => handleClick(dragons)}
        >
          remove all
        </button>
      ) : (
        <div className={s.Section}>
          <h2>Choose the dragon you want to fly by!</h2>
          <NavLink to="/dragons" className={s.navLink}>
                     go to Dragons
                    </NavLink>
          <img src={picture} alt="dragon in open air" className={s.Pic} />
        </div>
      )}
    </div>
  );
}
