// import { Sidebar } from "../../../Components";
import "./AboutAppPage.css";

export default function AboutAppPage() {
  return (
    <>
      {/* <Sidebar aboutApp={"About App"} aboutPage={"About Author"} /> */}
      <div id="main">
        <div className="fof">
          <h1>About App Page</h1>
          <p>
            In this app, you can add, delete, submit, and edit items. To edit
            items, simply double click on it. Once you are done, press the enter
            key to resubmit. This app will persist your data in the browser
            local storage. So whether you reload, close your app or reopened it,
            you still have access to your to-dos items
          </p>
        </div>
      </div>
    </>
  );
}
