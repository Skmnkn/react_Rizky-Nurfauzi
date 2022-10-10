import "./Assets/Css/bootstrap.min.css";
import FormPages from "./Pages/FormPages/FormPages";

function App() {
  return (
    <div className="container">
      <header className="mt-3">
        <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
      </header>
      <FormPages />
    </div>
  );
}

export default App;
