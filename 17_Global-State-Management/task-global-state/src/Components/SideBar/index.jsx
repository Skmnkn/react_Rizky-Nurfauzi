import { useState } from "react";
import "./sidebar.css";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar({ about, aboutApp, aboutPage }) {
  const [Check, setCheck] = useState(false);

  const handleSlide = () => {
    setCheck(!Check);
  };

  return (
    <header>
      <nav>
        <ul className={Check ? "slide" : ""}>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className={about ? "link" : "hidden"} to="/about">
            {about}
          </Link>
          <Link className="link" to="/about/about-app">
            {aboutApp}
          </Link>
          <Link className="link" to="/about/about-author">
            {aboutPage}
          </Link>
        </ul>
      </nav>
      <div className="hamburger-button">
        <input type="checkbox" onClick={handleSlide} />
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Outlet />
    </header>
  );
}
