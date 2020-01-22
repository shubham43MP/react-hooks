import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [ count, setCount ] = useState( 0 )
    // useEffect = () => {
    //     console.log( 'Demo For occurence', count )
    // }
    return (
    <div>
        Count: 
        <label> { count } </label>
        <button onClick={ () => setCount( count + 1) }>+</button>
        <button onClick={ () => setCount( count - 1) }>-</button>
    </div>
    )
 }

export default Counter