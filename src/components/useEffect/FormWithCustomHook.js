import React, { useEffect} from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';

export const FormsWithCustomHook = () => {
    const [formState, handleChange] = useForm({name: '', email: '', password: ''})

    const {email, name, password} = formState;

    useEffect(() => {
        console.log('email useEffect')
    },[email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>FormsWithCustomHook</h3>
            <hr/>

            <input 
                type='text'
                name='name'
                placeholder='name'
                value={name}
                onChange={handleChange}
                className='form-control'
                autoComplete='off'
            />

            <br/>
            <input 
                type='text'
                name='email'
                placeholder='email@domain.com'
                value={email}
                onChange={handleChange}
                className='form-control'
                autoComplete='off'
            />

            <br/>
            <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            className='form-control'
            placeholder='****'
            />

            <br/>
            <button 
            class='btn btn-primary'
            type='submit' 
            onClick={handleSubmit}>Submit</button>
        </form>
    )
}
