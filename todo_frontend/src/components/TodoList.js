import React from "react";
import TodoCard from "./TodoCard";

/**
 * PUBLIC_INTERFACE
 * TodoList displays a list of todo items using TodoCard.
 */
function TodoList({ todos, onCheck, onDelete, onEdit }) {
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          title={todo.title}
          subtitle={todo.subtitle}
          completed={todo.completed}
          onCheck={() => onCheck(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => onEdit(todo.id)}
        />
      ))}
    </div>
  );
}

export default TodoList;
