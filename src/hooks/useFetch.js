import {useState, useEffect, useRef} from 'react';
export const useFetch = (url) => {
    const [data, setData] = useState({error: null, loading: false, data: ''})
    const montedRef = useRef(true);

    useEffect(() => {
        return () => {
            montedRef.current = false;
        }
    },[])

    useEffect(() => {
        setData({...data, loading: true})
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    if(montedRef.current) {
                        setData({
                            loading: false, 
                            error: null,
                            data
                        })
                    } else {
                        console.log('unmounted component')
                    }                    
                },4000)
        })
    },[url]);

    return data;
}