import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "../02-useEffect/effects.css"
export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // const {state,increment} = useCounter
    const { author, quote } = !!data && data[0];
    console.log(data);
    console.log(author);
    console.log(quote);

    return (
        <div>
            <h6>The Breaking Bad</h6>
            <hr />
            {loading 
                ?
                <div className="text-center alert alert-info">
                    Loading...
                </div>
                :
                <blockquote className="text-end blockquote">
                    <p className="mb-8">{quote}</p>
                    <footer className="blockquote-footer">
                        {author}
                    </footer>
                </blockquote>
            }
            {!loading &&
                <button className="btn btn-primary" onClick={increment}>
                    Siguiente Frase
                </button>
            }


        </div>
    )
}
