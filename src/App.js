import { MainPage } from "./pages/Main";
import { RevolvingDot } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { getDragonItem, getLoading, getStatus } from "./redux/selectors";
import "./App.css";

function App() {
  const status = useSelector(getStatus);
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
      <MainPage />
    </div>
  );
}

export default App;
