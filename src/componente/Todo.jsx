import React, { useState } from "react";

function Todo({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const FormEdit = () => {
    return (
      <form>
        <input />
        <button>Update</button>
      </form>
    );
  };

  const TodoElement = () => {
    return (
      <div className="todoInfo">
        {todo.title}
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button>Delete</button>
      </div>
    );
  };

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}
export default Todo;
