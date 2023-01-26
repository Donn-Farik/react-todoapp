import React from "react";

function Todo({ todo, onDelete }) {
  return (
    <div>
      {todo.title}
      <button>completed</button>
      <button onClick={(e) => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
