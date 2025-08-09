import React, { useState } from "react";
import "./AddTodo.css";

/**
 * PUBLIC_INTERFACE
 * AddTodo component renders a full-screen modal/page for creating a new todo item.
 * It matches the "ADD TODO" screen_9:739 Figma reference and uses project design tokens.
 * 
 * Props:
 *   onAdd (function): Called when a new todo is submitted (title, subtitle).
 *   onCancel (function): Called when user cancels.
 */
function AddTodo({ onAdd, onCancel }) {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [error, setError] = useState("");

  // Handles submission of new todo.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required.");
      return;
    }
    setError("");
    if (onAdd) onAdd({ title: title.trim(), subtitle: subtitle.trim() });
    setTitle(""); setSubtitle("");
  };

  return (
    <div className="add-todo-page">
      {/* AppBar & StatusBar */}
      <div className="add-todo-status-bar" />
      <div className="add-todo-app-bar">
        <span className="add-todo-app-title">ADD TODO</span>
        <button
          className="add-todo-cancel"
          onClick={onCancel}
          aria-label="Cancel"
        >
          <span className="visually-hidden">Cancel</span>
          &#x2715;
        </button>
      </div>

      <form className="add-todo-form" onSubmit={handleSubmit}>
        <label className="add-todo-label" htmlFor="todo-title">
          Title
        </label>
        <input
          className="add-todo-input"
          type="text"
          id="todo-title"
          maxLength={50}
          autoFocus
          value={title}
          placeholder="Enter todo title"
          onChange={e => setTitle(e.target.value)}
          required
        />

        <label className="add-todo-label" htmlFor="todo-desc">
          Subtitle
        </label>
        <textarea
          className="add-todo-textarea"
          id="todo-desc"
          maxLength={200}
          value={subtitle}
          placeholder="Description (optional)"
          onChange={e => setSubtitle(e.target.value)}
          rows={3}
        />

        {error && <div className="add-todo-error">{error}</div>}

        <button
          className="add-todo-submit"
          type="submit"
          disabled={!title.trim()}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
