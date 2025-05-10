import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  description: string;
}

// interface TodoState {
//   [key: number]: Todo;
// }

const initialState: Todo[] = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Todo 3",
    description: "Description 3",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add_todo(state, action: PayloadAction<Todo>) {
      const { id, title, description } = action.payload;
      state.push({ id, title, description });
    },
    remove_todo(state, action: PayloadAction<number>) {
      console.log(state);
      console.log("remove_todo is running");
      const id = action.payload;
      state = state.filter((item) => id !== item.id);
    },
  },
});

export const { add_todo, remove_todo } = todoSlice.actions;
export default todoSlice.reducer;
