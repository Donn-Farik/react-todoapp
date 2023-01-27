import React from "react";

function Todo({ todo, onDelete }) {
  return (
    <div className="todoInfo">
      <span className="todoTitle">{todo.title}</span>

      <button className="button">completed</button>
      <button
        className="button buttonDelete"
        onClick={(e) => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
