import { useState } from "react";
import { useDispatch } from "react-redux";
import { onChecked, onDeleteHandler } from "../../store/features/todoSlice";

const TodoList = ({ todo, checked, onDelete }) => {
  const [isCheck, setIsCheck] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "completed" : "incomplete"}>
            <input
              type="checkbox"
              defaultChecked={todo.completed ? isCheck : !isCheck}
              onClick={() => dispatch(onChecked(todo.id))}
            ></input>
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => dispatch(onDeleteHandler(todo.id))}>Delete</button>
    </div>
  );
};
export default TodoList;
