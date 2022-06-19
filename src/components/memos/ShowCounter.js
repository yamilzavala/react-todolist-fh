import React, {useState} from 'react';
import '../useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';

export const ShowCounter = React.memo(({increment}) => { 
    console.log('render from show counter')
           
    return (       
            // <small>{value}</small>         
            <button onClick={() => increment(5)}>Increment</button>

    )
})