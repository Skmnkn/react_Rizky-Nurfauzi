import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Sidebar, TodoAction, TodoForm } from "../../Components";
import data from "../../Data/todo-data.json";
import "./TodoMain.css";

export default function TodoMain() {
  const [todos, setTodos] = useState([...data]);

  const addTodo = (userInput) => {
    let newTodo = [...todos];
    newTodo = [
      ...newTodo,
      {
        id: uuid(),
        title: userInput,
        completed: false,
      },
    ];
    setTodos(newTodo);
  };

  const handleDelete = (id) => {
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodo);
  };

  const handleCheckbox = (todo) => {
    let checkedTodo = todos.map((data) =>
      data.id === todo.id ? { ...data, completed: !data.completed } : data
    );
    setTodos(checkedTodo);
  };

  return (
    <>
      {/* <Sidebar about={"About"} /> */}
      <div className="todoList">
        <h1>Todolist</h1>
        <TodoForm addTodo={addTodo} />
        <TodoAction
          todos={todos}
          onDelete={handleDelete}
          checked={handleCheckbox}
        />
      </div>
    </>
  );
}
