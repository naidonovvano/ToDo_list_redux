import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { v1 } from "uuid";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <TodoItem key={v1()} {...todo} />
      ))}
    </ul>
  );
};
