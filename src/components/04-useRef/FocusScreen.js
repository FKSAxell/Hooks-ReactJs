import React, { useRef } from 'react'
import "../02-useEffect/effects.css"
export const FocusScreen = () => {

    const ref = useRef()
    console.log(ref)
    

    const handleClick =()=>{
        document.querySelector("input").select();

    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input className="form-control" 
            placeholder="Su nombre">
            </input>
            <button className="mt-5 btn btn-outline-primary"
            onClick={handleClick}>
                Focus
            </button>
        </div>
        
    )
}
