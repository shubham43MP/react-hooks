import React, { useState } from 'react'

const Counter = () => {
    const initialState = 0
    const [ count, setCount ] = useState( initialState )

    const incrementByTen = () => {
        return ( count + 10 )
    }
    return (
    <div>
        Count: 
        <label> { count } </label>
        <button onClick={ () => setCount( count + 1) }>+</button>
        <button onClick={ () => setCount( count - 1) }>-</button>
        <button onClick={ () => setCount( initialState) }>Reset</button>
        <button onClick={ () => setCount( incrementByTen) }>Increment by 10</button>
    </div>
    )
 }

export default Counter