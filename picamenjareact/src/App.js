import "./App.css";
// import Inici from "./components/Inici";
import Login from "./components/Login";
import Menu from "./components/Menu";

function App() {
  console.log(sessionStorage.getItem("token"));
  if (
    sessionStorage.getItem("token") !== "" &&
    sessionStorage.getItem("token") != null
  ) {
    return <Menu />;
  } else {
    return <Login />;
  }
}

export default App;
