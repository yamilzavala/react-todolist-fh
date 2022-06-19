import React, {useEffect, useState} from 'react';
import './effects.css';

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y: 0})
    const {x,y} = coords

    const mouseMoveFn = (e) => {
        const coords = {x: e.x, y: e.y}
        console.log(coords)
        setCoords(coords)
    }
    
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveFn) 
        return () => {
            window.removeEventListener('mousemove',mouseMoveFn)
        }
    },[])

    return (
        <>
            <h3>Message</h3>
            <hr/>
            <p>
                x: {x} y: {y}
            </p>
        </>
    )
}
