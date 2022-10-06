import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";
import { getDragonList } from "../../redux/DragonList/selectors";
import { getThunkDataList } from "../../redux/DragonList/thunks";
import { Slider } from "../Slider/Slider";
import { setDragon } from "../../redux/myDragons/reducers";
import s from "./List.module.css";

export function List() {
  const dispatch = useDispatch();
  const dragons = useSelector(getDragonList);

  useEffect(() => {
    dispatch(getThunkDataList());
  }, [dispatch]);

  const onRefresh = () => {
    return dispatch(getThunkDataList());
  };

  const handleClick = (dragons) => {
    dispatch(setDragon(dragons));
  };

  return (
    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      onRefresh={() => onRefresh()}
      triggerHeight={50}
      backgroundColor="transparent"
      startInvisible={true}
    >
      <div className={s.Container}>
        <ul className={s.List}>
          {dragons?.map((item) => (
            <li key={item.id} className={s.Item}>
              <div className={s.Title}>{item.name}</div>
              <Slider dataSlider={item} />
              <div className={s.Descr}>{item.description}</div>
              <div>{item.wikipedia}</div>

              <p>material: {item.heat_shield.material}</p>
              <p>size: {item.heat_shield.size_meters}</p>
              <p>temperature: {item.heat_shield.temp_degrees}</p>

              <p>mass: {item.launch_payload_mass.kg}</p>
              <p>diameter: {item.diameter.meters}</p>

              <button
                className={s.Btn}
                type="button"
                onClick={() => handleClick(item)}
              >
                add {item.name} to my profile
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PullToRefresh>
  );
}
