import React from "react";
import TodoApp from "./componente/TodoApp";

function App() {
  return (
    <div className="containerdetodo">
      <h1 className="firstTitle">What is your plan today ?</h1>
      <div className="container">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
