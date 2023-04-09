import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "elements/Header";
import { InputField } from "elements/InputField";
import { TodoList } from "elements/TodoList";
import { addNewTask, fetchTodos, filterTodo } from "store/todoSlice";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const [title, setTitle] = useState("");
  const { status, error } = useSelector((state) => state.todos);

  const addTask = () => {
    if (title.trim().length) {
      dispatch(addNewTask(title));
      setTitle("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    if (!searchText) dispatch(fetchTodos());
    dispatch(filterTodo(searchText));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return isAuth ? (
    <div>
      <Header handleInputChange={handleInputChange} email={email} />
      <h1>Welcome! Your "to do" list:</h1>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      <TodoList />
      <InputField
        title={title}
        setTitle={setTitle}
        addNewTask={addTask}
        handleKeyPress={handleKeyPress}
      />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
