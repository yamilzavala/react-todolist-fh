import { useReducer, useEffect } from "react";
import { todoReducer } from "../components/useReducer/todo-reducer";

let initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todosState, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosState));
  }, [todosState]);

  const handleAddTodo = (todo) => {
    const action = {
      type: "add",
      payload: todo,
    };
    dispatch(action);
    localStorage.setItem("todos", JSON.stringify(todosState));
  };

  const handleRemoveTodo = (idxTodo) => {
    const action = {
      type: "remove",
      payload: idxTodo,
    };
    dispatch(action);
  };

  const handleUpdateTodo = (todo) => {
    const action = {
      type: "update",
      payload: todo,
    };
    dispatch(action);
  };

  return {
    todosState,
    handleAddTodo,
    handleRemoveTodo,
    handleUpdateTodo,
    todosCount: todosState.length,
    pendingTodos: todosState.filter(todo => !todo.done).length
  };
};
