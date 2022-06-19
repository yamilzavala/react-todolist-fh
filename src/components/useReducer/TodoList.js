import React from "react";
import TodoItem from './TodoItem'
const TodoList = ({ todos, handleRemoveTodo, handleUpdateTodo}) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, idx) => (
        // start TodoItem
        <TodoItem todo={todo} index={idx} key={idx} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo} />
        // end TodoItem
      ))}
    </ul>
  );
};

export default TodoList;
