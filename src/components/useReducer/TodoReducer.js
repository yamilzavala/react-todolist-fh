import React from 'react';
import './styles.css';
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import {useTodo} from '../../hooks/useTodo'


export const TodoReducer = () => { 
   
    const {todosState, handleAddTodo, handleRemoveTodo, handleUpdateTodo, todosCount, pendingTodos} = useTodo();

    return (
        <div>
          <h3>Todo List</h3>
          <h4>Total todos: {todosCount} - Pending todos: {pendingTodos}</h4>
          <hr/>
          <div className="row">
            <div className="col-7">
                {/* start TodoList */}         
                <TodoList todos={todosState} handleRemoveTodo={handleRemoveTodo} handleUpdateTodo={handleUpdateTodo}/>                      
                {/* end TodoList */}
            </div>

            <div className="col-5">
                <h3>Add todo</h3>
                <hr/>
                {/* start TodoDdd  => todo*/}                
                <AddTodo handleAddTodo={handleAddTodo} />
                {/* end TodoAdd */}
            </div>
          </div> 
        </div>
    )
}
