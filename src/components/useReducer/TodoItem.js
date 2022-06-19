import React from "react";
const TodoItem = ({ todo, index, handleRemoveTodo, handleUpdateTodo }) => {
  return (
    <li className="list-group-item" key={index}>
      <p className={`text-center ${(todo.done) ? 'complete' : ''}`}  onClick={() => handleUpdateTodo(todo)}> 
        {index + 1} - {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleRemoveTodo(todo.id)}>
        X
      </button>
    </li>
  );
};

export default TodoItem;
