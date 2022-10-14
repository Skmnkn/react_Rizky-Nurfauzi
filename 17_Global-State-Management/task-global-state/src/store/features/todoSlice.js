import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APITODO from "../../Apis/todo.api";

const initialState = {
  data: [],
  componentStatus: false,
};

export const fetchTodo = createAsyncThunk("fetchTodo/todo", async () => {
  try {
    const res = await APITODO.getAllTodo();
    return res.data.todoApp_todoList;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteTodo = createAsyncThunk("delete/todos", async (id) => {
  try {
    const response = await APITODO.deleteTodosById(id);
    console.log(response);
    return response.data.delete_todoApp_todoList.returning[0];
  } catch (error) {
    console.log(error);
  }
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducers: {
  //   onAddHandler: (state, action) => {
  //     const newTasks = {
  //       id: uuid(),
  //       title: action.payload,
  //       completed: false,
  //     };
  //     return (state = [...state, newTasks]);
  //   },
  //   onDeleteHandler: (state, action) => {
  //     const newTodoList = state.filter((todo) => {
  //       return todo.id !== action.payload;
  //     });
  //     return (state = newTodoList);
  //   },
  //   onChecked: (state, action) => {
  //     const checkedTodo = state.map((data) =>
  //       data.id === action.payload
  //         ? { ...data, completed: !data.completed }
  //         : data
  //     );
  //     return checkedTodo;
  //   },
  // },
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.fetchStatus = !state.fetchStatus;
        state.data = state.data.filter((item) => item.id !== action.payload.id);
      });
  },
});

export const { onAddHandler, onDeleteHandler, onChecked } = todoSlice.actions;
export default todoSlice.reducer;
