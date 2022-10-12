import { TodoAction, TodoForm } from "../../Components";
import "./TodoMain.css";

export default function TodoMain() {
  // const [todos, setTodos] = useState([...data]);
  // const dispatch = useDispatch();

  // const addTodo = (userInput) => {
  //   let newTodo = [...todos];
  //   newTodo = [
  //     ...newTodo,
  //     {
  //       id: uuid(),
  //       title: userInput,
  //       completed: false,
  //     },
  //   ];
  //   setTodos(newTodo);
  // };

  // const handleDelete = (id) => {
  //   const deletedTodo = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(deletedTodo);
  // };

  // // const handleCheckbox = (id) => {
  // //   // dispatch(onChecked(id));
  // // };

  return (
    <>
      {/* <Sidebar about={"About"} /> */}
      <div className="todoList">
        <h1>Todolist</h1>
        <TodoForm />
        <TodoAction />
      </div>
    </>
  );
}
