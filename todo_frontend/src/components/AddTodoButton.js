import React from "react";

/**
 * PUBLIC_INTERFACE
 * AddTodoButton is the floating plus button for adding a todo.
 */
function AddTodoButton({ onClick }) {
  return (
    <button className="add-todo" aria-label="Add new todo" onClick={onClick}>
      <span className="visually-hidden">Add</span>
      <img
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43eea673-6eb0-4aae-b67a-d759ff29b60f"
        alt="Plus"
      />
    </button>
  );
}

export default AddTodoButton;
