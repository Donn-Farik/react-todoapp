import React, { useState } from "react";

function Todo({ todo, onDelete }) {
  const [completed, setCompleted] = useState(false);
  const handleCompleted = () => {
    setCompleted((completed) => !completed);
    console.log("click");
  };
  return (
    <div className="todoInfo">
      <span className={completed ? "todoTitleCompleted" : "todoTitle "}>
        {" "}
        {todo.title}
      </span>

      <button onClick={handleCompleted} className="button">
        completed
      </button>
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
