import React, { useState } from 'react'

const Counter = () => {
    const initialState = 0
    const [ count, setCount ] = useState( initialState )
    return (
    <div>
        Count: 
        <label> { count } </label>
        <button onClick={ () => setCount( count + 1) }>+</button>
        <button onClick={ () => setCount( count - 1) }>-</button>
        <button onClick={ () => setCount( initialState) }>Reset</button>
    </div>
    )
 }

export default Counter