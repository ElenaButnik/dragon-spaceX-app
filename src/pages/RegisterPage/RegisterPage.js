import { Link } from "react-router-dom";
import { SignUp } from "../../components/Auth/SignUp";
import s from './Register.module.css'

export function Register() {
  return (
    <>
      <SignUp />
      <p >
        Already have an account? <Link to="/login" className={s.Link}> Sign in</Link>
      </p>
    </>
  );
}
