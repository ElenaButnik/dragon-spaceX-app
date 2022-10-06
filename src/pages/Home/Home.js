import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/User/selectors";
import { Register } from "../RegisterPage/RegisterPage";
import s from "./Home.module.css";

export function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={s.Section}>
      <h1 className="animate__animated animate__slideInUp"> DRAGON</h1>
      <h2 className="animate__animated animate__slideInUp">
        {" "}
        SENDING HUMANS AND CARGO INTO SPACE{" "}
      </h2>
      {!isLoggedIn ? <Register /> : null}
    </div>
  );
}
