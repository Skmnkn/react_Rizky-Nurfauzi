import { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddHandler } from "../../store/features/todoSlice";

export default function TodoForm() {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = inputTodo
      ? dispatch(onAddHandler(inputTodo))
      : alert("Masukkan data terlebih dahulu");
    setInputTodo("");
    return newTodos;
  };

  return (
    <div className="todoForm">
      <form>
        <input
          type="text"
          placeholder="Add todo..."
          onChange={handleChange}
          value={inputTodo}
        />
        <input type="submit" className="submitButton" onClick={handleSubmit} />
      </form>
    </div>
  );
}
