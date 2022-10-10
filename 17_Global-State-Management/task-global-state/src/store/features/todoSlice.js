import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialValue = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: true,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    onAddHandler: (state, action) => {
      const newTasks = {
        id: uuid(),
        tittle: action.payload,
        completed: false,
      };
      state.todos = [...state.todos, newTasks];
    },
    onDeleteHandler: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
  },
});

export const { onAddHandler, onDeleteHandler } = todoSlice.actions;
export default todoSlice.reducer;
