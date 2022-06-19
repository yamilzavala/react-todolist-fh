import React, {useState} from "react";
import useForm from '../../hooks/useForm'

const AddTodo = ({handleAddTodo}) => {
  const {description, handleChange, resetForm}= useForm({description: ''})

  const handleSubmit = (e) => {
    e.preventDefault();   
    if(description?.length < 1) return;

    const newTodo = {
        id: +new Date().getTime(),
        desc: description,
        done: false 
    }
    handleAddTodo(newTodo);
    resetForm()
   }


  return (
    <form onSubmit={handleSubmit}>
      <input
        value={description}
        placeholder="description"
        className="form-control"
        type="text"
        name="description"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type='submit' className="btn btn-outline-primary mt-3 btn-block">
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
