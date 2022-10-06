import { Link } from "react-router-dom";
import { Login } from "../../components/Auth/Login";
import s from "./Login.module.css";

export function LoginPage() {
  
  return (
    <>
      <Login />
      <p>
        <Link to="/register" className={s.Link}>
          register
        </Link>
      </p>
    </>
  );
}
