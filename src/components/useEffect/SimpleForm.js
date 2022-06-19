import React, {useState, useEffect} from 'react';
import {Message} from './Message';
import './effects.css';

export const SimpleForm = () => {
    const [formState, setForm] = useState({name: '', email: ''})

    const {email, name} = formState;

    useEffect(() => {
        console.log('init useEffect')
    },[])

    useEffect(() => {
        console.log('email useEffect')
    },[email])

    useEffect(() => {
        console.log('name useEffect')
    },[name])



    const handleChange = ({target}) => {
        console.log('target: ',target)
        setForm({
            ...formState, 
            [target.name]: target.value
        })
    }

    return (
        <>
            <h3>useEffect</h3>
            <hr/>

            <input 
                type='text'
                name='name'
                placeholder='enter 123 to show information about cursor (x,y)'
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

            {(name == 123) && <Message/>}
        </>
    )
}
