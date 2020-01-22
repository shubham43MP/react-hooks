import React, { useState } from 'react'

const Counter = () => {
    const initialState = 0
    const [ count, setCount ] = useState( initialState )

    const incrementByTen = () => {
        for ( let i = 0; i < 10; i++ ){
            setCount( prevCount => prevCount + 1 )
        }
    }
    return (
    <div>
        Count: 
        <label> { count } </label>
        <button onClick={ () => setCount( count + 1) }>+</button>
        <button onClick={ () => setCount( count - 1) }>-</button>
        <button onClick={ () => setCount( initialState) }>Reset</button>
        <button onClick={ incrementByTen }>Increment by 10</button>
    </div>
    )
 }

export default Counter