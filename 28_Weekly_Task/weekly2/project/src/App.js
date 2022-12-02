import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/Footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
      <Helmet>
        <script>
          var scene = document.getElementById("scene"); var parallax = new
          Parallax(scene);
        </script>

        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </Helmet>
    </>
  );
}

export default App;
