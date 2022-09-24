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
              defaultChecked={todo.completed ? isCheck : !isCheck}
              onClick={() => checked(todo)}
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
