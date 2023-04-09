import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    users: userSlice,
  },
});
