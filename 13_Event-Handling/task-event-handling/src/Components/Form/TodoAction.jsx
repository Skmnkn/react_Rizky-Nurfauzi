import TodoList from "./TodoList";

const TodoAction = ({ todos, onDelete, checked }) => {
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
