import { Routes, Route } from "react-router-dom";
import { RevolvingDot } from "react-loader-spinner";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";
import { Navigation } from "./components/Navigation/Navigation";
import { getStatus } from "./redux/DragonItem/selectors";
import { DragonList } from "./pages/Dragons/Dragons";
import { Profile } from "./pages/Profile/Profile";
import { getIsLoggedIn } from "./redux/User/selectors";
import "./App.css";

const Dragon = loadable(() => import("./pages/Dragon/Dragon.js"), {
  resolveComponent: (components) => components.Dragon,
});
const Home = loadable(() => import("./pages/Home/Home.js"), {
  resolveComponent: (components) => components.Home,
});
const Register = loadable(
  () => import("./pages/RegisterPage/RegisterPage.js"),
  {
    resolveComponent: (components) => components.Register,
  }
);
const LoginPage = loadable(() => import("./pages/LoginPage/LoginPage.js"), {
  resolveComponent: (components) => components.LoginPage,
});

function App() {
  const status = useSelector(getStatus);
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className="App">
      {status === "pending" && (
        <RevolvingDot
          height={100}
          width={100}
          color="#4242ee"
          secondaryColor="#f5f5cd"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          }}
          visible={true}
        />
      )}

      <Navigation />
      {isLoggedIn !== null ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<Dragon />} />
          <Route path="/dragons" element={<DragonList />} />
          <Route path="/profile" element={<Profile />} />{" "}
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
