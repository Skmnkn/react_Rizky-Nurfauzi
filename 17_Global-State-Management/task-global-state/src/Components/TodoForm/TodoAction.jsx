import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const TodoAction = ({ onDelete, checked }) => {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="todos">
      <ul>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            checked={checked}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoAction;
