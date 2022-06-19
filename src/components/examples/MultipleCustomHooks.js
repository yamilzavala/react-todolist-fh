import React, {useState} from 'react';
import {useFetch} from '../../hooks/useFetch'
import '../useEffect/effects.css';

export const MultipleCustomHook = () => { 
    const [quoteNumber, setQuote] = useState(1);
    const {loading, data, error} = useFetch(`https://www.breakingbadapi.com/api/quotes/${quoteNumber}`)       

    if(loading) return <div className="alert alert-info text-center">Loading...</div>

    if(error) return <h3>Error while getting data from api...</h3>
    
    return (
        <>
            <h3>Breakng bad quotes</h3>
            <hr/>
            {!!data 
            && 
            data.map(quoteData => (<blockquote key={quoteData.quote_id}>
                    <p>{quoteData.quote}</p>
                    <footer>{quoteData.author}</footer>
                 </blockquote>))}        

            <button onClick={() => setQuote(s => s+1)}>Load next quate</button>    
        </>
    )
}
