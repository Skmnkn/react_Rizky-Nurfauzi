import { useState } from "react";
import { useDispatch } from "react-redux";
// import { onAddHandler } from "../../store/features/todoSlice";
import { createTodo } from "../../store/features/todoSlice";

export default function TodoForm() {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const todo = formData.get("todo");
    let newTodos = inputTodo
      ? dispatch(createTodo({ todo }))
      : alert("Masukkan data terlebih dahulu");
    setInputTodo("");
    return newTodos;
  };

  return (
    <div className="todoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handleChange}
          value={inputTodo}
          name="todo"
        />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}
