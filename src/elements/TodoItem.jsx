import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleStatus } from "store/todoSlice";

export const TodoItem = ({ id, todo, completed }) => {
  const dispatch = useDispatch();
  const deleteTask = () => dispatch(removeTodo(id));
  const toggleTask = () => dispatch(toggleStatus(id));

  return (
    <li>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          checked={completed}
          onChange={toggleTask}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {todo}
        </label>
      </div>
      <span className="delete" onClick={deleteTask}>
        &times;
      </span>
    </li>
  );
};
