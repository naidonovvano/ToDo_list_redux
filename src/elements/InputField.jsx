import React from "react";

export const InputField = ({ title, setTitle, addNewTask, handleKeyPress }) => {
  return (
    <div className="inputField fixed-bottom">
      <input
        className="form-control form-control-lg"
        value={title}
        type="text"
        placeholder="Enter your task..."
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="btn btn-primary" onClick={addNewTask}>
        <b>ADD</b>
      </button>
    </div>
  );
};
