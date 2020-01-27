# React-Hooks

4) useReducer

useReducer is a hook that is used for state management

It is an alternative to useState and infact useState is built using useReducer 


What is the difference ??

All in all till now,

useState   - States
useEffects - Side effects
useContext - Context API
useReducer - Reducers ( SIMILAR TO REDUX )

useReducer is a function like reduce in Vanilla JS

useReducer( reducer, initialState )
reducer( currentState, action )

Important to note:
useReducer + useContext ----> Global State Management
useReducer              ----> Local State Management



useState vs useReducer

Type                useState                              useReducer
type of state      number, string or boolean              Object/Array
number of state transitions   1-2                         Too Many
Related State XSitions     No                             Yes
Scope                Local                                Global

