import "./App.css";
import Menu from "./components/Menu";

function App() {
  // IDIOMA CATALÀ (ID_IDIOMA = 1) PER DEFECTE
  if (sessionStorage.getItem("id_idioma") === null || sessionStorage.getItem("id_idioma") === "null" || sessionStorage.getItem("id_idioma") === undefined || sessionStorage.getItem("id_idioma") === "undefined") {
    sessionStorage.setItem("id_idioma", "1");
  }
  return <Menu />
}

export default App;
