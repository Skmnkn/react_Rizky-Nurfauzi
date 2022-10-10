import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../Components";
import {
  TodoMain,
  About,
  AboutAppPage,
  AboutAuthorPage,
  ErrorPage,
} from "../Pages";

export default function SetupRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar
              about={"About"}
              aboutApp={"About App"}
              aboutPage={"About Author"}
            />
          }
        >
          <Route path="/" element={<TodoMain />} />
          <Route path="/about">
            <Route index element={<About />} />
            <Route path="about-app" element={<AboutAppPage />} />
            <Route path="about-author" element={<AboutAuthorPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
