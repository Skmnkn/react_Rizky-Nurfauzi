import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div id="main">
      <div className="fof">
        <h1>Error 404</h1>
        <br />
        <Link to="/">
          <h2>Back to Home</h2>
        </Link>
      </div>
    </div>
  );
}
