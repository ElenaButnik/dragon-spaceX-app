import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getThunkDataList } from "../../redux/DragonList/thunks";
import { getDragonList } from "../../redux/DragonList/selectors";
import s from "./Dragon.module.css";
import "../../App.css";

export function Dragon() {
  const dispatch = useDispatch();
  const dragons = useSelector(getDragonList);

  useEffect(() => {
    dispatch(getThunkDataList());
  }, [dispatch]);

  return (
    <div className={s.Container}>
      {
        <>
          <div className={s.Wrapper}>
            <div className={s.Section}>
              <div>
                <ul>
                  {dragons.map((dragon) => (
                    <li className={s.Description} key={dragon.id}>
                      <h2 className={s.Name}>{dragon.name}</h2>
                      <h3>Overview</h3>
                      <p className={s.About}>{dragon.description}</p>

                      <div className={s.AboutLink}>
                        <a
                          className={s.Link}
                          href="https://en.wikipedia.org/wiki/SpaceX_Dragon"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {dragon.wikipedia}
                        </a>
                      </div>

                      <div className={s.AboutLink}>
                        <span className={s.Param}>
                          Height
                          <p>
                            {dragon.height_w_trunk?.meters} m /{" "}
                            {dragon.height_w_trunk?.feet} ft
                          </p>
                        </span>
                      </div>

                      <div className={s.AboutLink}>
                        <span className={s.Param}>
                          Mass
                          <p>
                            {dragon.dry_mass_kg} kg / {dragon.dry_mass_lb} lb
                          </p>
                        </span>
                      </div>

                      <div className={s.AboutLink}>
                        <span className={s.Param}>
                          first flight
                          <p>{dragon.first_flight}</p>
                        </span>
                      </div>

                      <div className={s.AboutLink}>
                        <span className={s.Param}>
                          <img
                            src={dragon.flickr_images}
                            className={s.Img}
                            alt={dragon}
                          />
                        </span>
                      </div>
                      <div className={s.ToDragonsLink}>
                        <Link className={s.Link} to="/dragons">
                          Read more{" "}
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}
