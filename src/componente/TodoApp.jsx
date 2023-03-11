import { useState } from "react";
import Todo from "./Todo.jsx";
import "./todoApp.css";

function App() {
  const [title, setTitle] = useState("write what would you to do here...");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };
  const handleDelete = (id) => {
    // const temp = todos.filter((item) => item.id !== id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />

        <input
          type="submit"
          value="Create todo "
          className="buttonCreate"
          onClick={handleSubmit}
        />
      </form>
      <div className="todosContainer">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
