import "../assets/css/bootstrap.min.css";
import "../assets/css/styleHome.css";
import Header from "../components/Header";
import { listTodos } from "../todos";

function HomePage() {
  return (
    <>
      <Header name="To Do App" />
      <div className="container">
        <ul className="list-group">
          {listTodos.map((listTodos) => (
            <li
              key={listTodos.id}
              className={listTodos.completed ? "todo done" : "todo undone"}
            >
              {listTodos.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
