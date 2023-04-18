import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch("https://dummyjson.com/todos?limit=5");
      if (!response.ok) {
        throw new Error("Server error!");
      }
      const data = await response.json();
      return data.todos;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addNewTask = createAsyncThunk(
  "todos/AddNewTask",
  async function (todo, { rejectWithValue, dispatch }) {
    try {
      const task = {
        userId: 1,
        todo: todo,
        completed: false,
      };

      const response = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      if (!response.ok) {
        throw new Error("Can't add a task. Server error!");
      }
      const data = await response.json();
      dispatch(addTodo(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${id}/`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Can't delete task. Server error!");
      }
      dispatch(deleteTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const toggleStatus = createAsyncThunk(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todos.todos.find((todo) => todo.id === id);
    try {
      const response = await fetch(`https://dummyjson.com/todos/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
        }),
      });
      if (!response.ok) {
        throw new Error("Can't toggle status. Server error!");
      }
      dispatch(toggleTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    searchText: "",
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    filterTodo(state, action) {
      state.searchText = action.payload;
      state.todos = state.todos.filter((todo) =>
        todo.todo.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
    builder
      .addCase(addNewTask.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
      })
      .addCase(addNewTask.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
    builder
      .addCase(removeTodo.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
    builder
      .addCase(toggleStatus.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(toggleStatus.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
      })
      .addCase(toggleStatus.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { addTodo, deleteTodo, toggleTodo, filterTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
