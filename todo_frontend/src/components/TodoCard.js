import React from "react";

/**
 * PUBLIC_INTERFACE
 * TodoCard component displays single todo item and actions (check, delete, edit).
 */
function TodoCard({
  title,
  subtitle,
  onCheck,
  onDelete,
  onEdit,
  completed = false,
}) {
  return (
    <div className="todo-card" style={completed ? { opacity: 0.7 } : {}}>
      <div className="todo-card-titles">
        <div className="todo-title">{title}</div>
        <div className="todo-subtitle">{subtitle}</div>
      </div>
      <div className="todo-card-actions">
        <button
          className="todo-action"
          aria-label="Check"
          onClick={onCheck}
        >
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e41ba20b-4b28-4fc7-9efb-060563281884"
            alt="Check"
          />
        </button>
        <button
          className="todo-action"
          aria-label="Delete"
          onClick={onDelete}
        >
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/055c81ed-1390-4dd3-9913-9508fce51263"
            alt="Delete"
          />
        </button>
        <button
          className="todo-action"
          aria-label="Edit"
          onClick={onEdit}
        >
          <img
            src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6168f4c7-5bef-4645-b121-1b511598feb0"
            alt="Edit"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
