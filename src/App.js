import React, { useReducer } from 'react';
import logo from './logo.svg';
import UseReducerExample1 from './components/useReducerCounter'
import UseReducerExample2 from './components/useReducerCounter2'
import UseReducerExample3 from './components/useReducerCounter3'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import './App.css';

export const CountContext = React.createContext()

const initialState = 0

const reducer = ( state, action ) => {
    switch( action ){
        case 'INCREMENT': 
        return state + 1

        case 'DECREMENT': 
        return state - 1

        case 'RESET': 
        return initialState

        default :
        return state
    }
}

function App() {
  const [ count, dispatch ] = useReducer( reducer, initialState )
  console.log( 'gggggggggggg' )
  return (
    <CountContext.Provider value={ { countState: count, countDispatch: dispatch } }>
      <div className="App">
        {/* <UseReducerExample1/> */}
        {/* <UseReducerExample2 /> */}
        {/* <UseReducerExample3 /> */}
        Counter --------- { count }
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
