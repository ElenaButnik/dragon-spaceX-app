import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../redux/User/reducers";

export function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password, error) => {
    const auth = getAuth();
    if (password === "" || email === "") {
      alert("Please enter your email and password");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            name: user.name,
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate(`/`);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch(() => alert("User with such email had already been registered"));
  };

  return (
    <>
      <Form title="register" handleClick={handleRegister} />
    </>
  );
}
