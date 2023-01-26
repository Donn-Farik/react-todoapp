import { useState } from "react";
import Todo from "./Todo.jsx";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setTitle("");
  // };
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
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
