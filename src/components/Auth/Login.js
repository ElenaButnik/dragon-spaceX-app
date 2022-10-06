import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { setUser } from "../../redux/User/reducers";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = JSON.parse(localStorage.getItem("user"));

  const handleLogin = (email, password) => {
    const auth = getAuth();
    if (password === "" || email === "") {
      alert("Please enter your email and password");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.stsTokenManager.accessToken,
          })
        );

        navigate(`/`);
      })
      .catch(() => alert("Invalid user!"));
  };

  return (
    <>
      <Form title="sign in" handleClick={handleLogin} />
    </>
  );
}
