import React, {useState, useMemo, useCallback} from 'react';
import '../useEffect/effects.css';
import {ShowCounter} from './ShowCounter'
import { useCounter } from '../../hooks/useCounter';
import {heavyProcess} from '../../helpers/heavyProcess'

export const Memorize = () => { 
   const [counter, setCounter] = useState(0);
   const [show, setShow] = useState(true)

//    const increment = (n) => {
//     setCounter(s => s + n)
//    }

   const useCallBackFn = useCallback((n) => setCounter(s => s + n), [setCounter])

//    const resultHeavyFn = useMemo(() => heavyProcess(counter), [counter])
        
    return (
        <>
            <h3>Momorize</h3>
            <hr/>           
            <h3>Counter: {counter} <ShowCounter increment={useCallBackFn}/></h3>
            <button onClick={() => setCounter(s => s+1)}>Increment</button>
            {/* <p>{resultHeavyFn}</p> */}
            <button onClick={() => setShow(s => !s)}>Show: {JSON.stringify(show)}</button>
        </>
    )
}
