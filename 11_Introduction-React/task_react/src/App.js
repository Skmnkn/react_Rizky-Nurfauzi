import Home from "./modules/home";
import About from "./modules/about";
//import logo from "./logo.svg";
import "../src/assets/css/main.css";
import "../src/assets/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
