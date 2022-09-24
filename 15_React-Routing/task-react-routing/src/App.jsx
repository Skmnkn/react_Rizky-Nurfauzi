import "./App.css";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import TodoMain from "./Pages/TodoPage/TodoMain";
import AboutAppPage from "./Pages/About/AboutAppPage/AboutAppPage";
import AboutAuthorPage from "./Pages/About/AboutAuthorPage/AboutAuthorPage";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoMain />} />
        <Route path="/about">
          <Route index element={<About />} />
          <Route path="about-app" element={<AboutAppPage />} />
          <Route path="about-author" element={<AboutAuthorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
