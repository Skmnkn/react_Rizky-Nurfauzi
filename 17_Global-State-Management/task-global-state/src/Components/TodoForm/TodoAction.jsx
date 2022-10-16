import React, { useEffect } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "../../store/features/todoSlice";

const TodoAction = ({ deleteTodo }) => {
  const dispatch = useDispatch();
  const listOfTodo = useSelector((state) => state.todo.data);
  const componentStatus = useSelector((state) => state.todo.componentStatus);
  // console.log(listOfTodo);
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch, componentStatus]);

  return (
    <div className="todos">
      <ul>
        {listOfTodo?.map((todo) => (
          <TodoList key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoAction;
