import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import mockData from "../../Data/todo-data.json";

const initialState = mockData;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    onAddHandler: (state, action) => {
      const newTasks = {
        id: uuid(),
        title: action.payload,
        completed: false,
      };
      return (state = [...state, newTasks]);
    },
    onDeleteHandler: (state, action) => {
      const newTodoList = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return (state = newTodoList);
    },
    onChecked: (state, action) => {
      const checkedTodo = state.map((data) =>
        data.id === action.payload
          ? { ...data, completed: !data.completed }
          : data
      );
      return checkedTodo;
    },
  },
});

export const { onAddHandler, onDeleteHandler, onChecked } = todoSlice.actions;
export default todoSlice.reducer;
