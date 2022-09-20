import { useState } from "react";

const TodoList = ({ todo, checked, onDelete }) => {
  const [isCheck, setIsCheck] = useState(true);

  return (
    <div className="todo">
      {
        <>
          <li className={todo.completed ? "completed" : "incomplete"}>
            <input
              type="checkbox"
              onClick={() => checked(todo)}
              defaultChecked={todo.completed ? isCheck : !isCheck}
            ></input>
            {todo.title}
          </li>
        </>
      }
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};
export default TodoList;
