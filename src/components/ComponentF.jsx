import React, { useContext } from 'react'
import { CountContext } from '../App'
const ComponentF = ( ) => {
    const { countState, countDispatch } = useContext( CountContext )
    return ( 
        <div>
            Component F
            <button onClick={ () => countDispatch( 'INCREMENT' ) }>Increment</button>
            <button onClick={ () => countDispatch( 'DECREMENT' ) }>Decrement</button>
            <button onClick={ () => countDispatch( 'RESET' ) }>Reset</button>
        </div>
    )
 }

 export default ComponentF