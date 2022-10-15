import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [inputTodo, setInputTodo] = useState("");

  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodos = inputTodo
      ? addTodo(inputTodo)
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
