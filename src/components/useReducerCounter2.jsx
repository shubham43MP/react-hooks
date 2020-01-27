import React, { useReducer } from 'react'

const initialState = { firstCounter: 0, secondCounter: 0 }

const reducer = ( state, action ) => {
    switch( action.type ){
        case 'INCREMENT': 
        return {
            ...state,
            firstCounter: state.firstCounter  + action.value
        }

        case 'DECREMENT': 
        return {
            ...state,
            firstCounter: state.firstCounter  - action.value
        }

        case 'INCREMENT2': 
        return {
            ...state,
            secondCounter: state.secondCounter  + action.value
        }

        case 'DECREMENT2': 
        return {
            ...state,
            secondCounter: state.secondCounter  - action.value
        }

        case 'RESET': 
        return initialState

        default :
        return state
    }
}
const UseReducerExample2 = ( ) => {

    const [ count, dispatch ] = useReducer( reducer, initialState )
    return ( 
        <div>
            <div>Count ----------- { count.firstCounter } </div>
            <div>Count ----------- { count.secondCounter } </div>
            <button onClick={ () => dispatch( { type: 'INCREMENT', value: 1 } ) }>Increment</button>
            <button onClick={ () => dispatch( { type: 'DECREMENT', value: 1 } ) }>Decrement</button>
            <button onClick={ () => dispatch( { type: 'INCREMENT2', value: 5 } ) }>Increment 5</button>
            <button onClick={ () => dispatch( { type: 'DECREMENT2', value: 5 } ) }>Decrement 5</button>
            <button onClick={ () => dispatch( { type: 'RESET' } ) }>Reset</button>
        </div>
    )
 }

 export default UseReducerExample2