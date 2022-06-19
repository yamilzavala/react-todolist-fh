import React, {useRef,useState} from 'react';
import '../useEffect/effects.css';
import {MultipleCustomHook} from '../examples/MultipleCustomHooks'

export const FocusScreen = () => { 
    const [show, setShow] = useState(false)
    const inputRef = useRef();

    const handleFocus = () => {
        // document.querySelector('input').select()
        inputRef.current.select();
    }
        
    return (
        <>
            <h3>FocusScreen</h3>
            <hr/>
           
            <input 
            ref={inputRef}
            type='text'
            className='form-control'
            placeholder='your name'/>

            <br/>
            <button onClick={handleFocus}>Focus</button>    
            <br/>

            {
                show && <MultipleCustomHook/>
            }
            <br/>
            <button onClick={() => setShow(s =>!s)}>Show</button>
        </>
    )
}
