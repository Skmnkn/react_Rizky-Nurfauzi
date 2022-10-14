import { useState } from "react";
import { useDispatch } from "react-redux";
import { onChecked, deleteTodo } from "../../store/features/todoSlice";

const TodoList = ({ todo, onDelete }) => {
  const [isCheck, setIsCheck] = useState(true);

  const dispatch = useDispatch();
  return (
    <div className="todo">
      {
        <>
          <li
            key={todo.id}
            className={todo.completed ? "completed" : "incomplete"}
          >
            <input
              type="checkbox"
              defaultChecked={todo.completed ? isCheck : !isCheck}
              onClick={() => dispatch(onChecked(todo.id))}
            ></input>
            {todo.todo}
          </li>
        </>
      }
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </div>
  );
};
export default TodoList;
