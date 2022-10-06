import { useAuth } from "../../hooks/use-auth";
import { Register } from "../RegisterPage/RegisterPage";
import s from "./Home.module.css";

export function Home() {
  const { isAuth, email } = useAuth();

  return  (
    <div className={s.Section}>
      <h1 className="animate__animated animate__slideInUp"> DRAGON</h1>
      <h2 className="animate__animated animate__slideInUp">
        {" "}
        SENDING HUMANS AND CARGO INTO SPACE{" "}
      </h2>
      {!isAuth ? <Register /> : null}
    </div>
  ) 
}
