import React, {useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import './CounterApp.css';

export const CounterApp = () => {
    const {state, increment, decrement, reset} = useCounter(200)

    return (
        <>
            <p className="text">Hook app</p>
            <br/>
            {state} 
            <br/>
            <button className='btn' onClick={() => increment(2)}>+</button>
            <br/>
            <button className='btn' onClick={() => decrement(2)}>-</button>
            <br/>
            <button className='btn' onClick={reset}>reset</button>
        </>
    )
}