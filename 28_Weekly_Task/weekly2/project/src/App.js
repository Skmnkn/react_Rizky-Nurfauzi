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
        <title>RKTPC | Gaming PCs made simple</title>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </Helmet>
    </>
  );
}

export default App;
