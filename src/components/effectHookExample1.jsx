import React, { useEffect, useState } from 'react'

const EffectHookExample1 = ( props ) => {

    const intialState = 0
    const [ count, setCount ] = useState( intialState )
    const [ name, setName ] = useState( 'shubham' )

    useEffect( () => {
        console.log( 'dddddddddddddddddddd', count )
        document.title = `You have clicked ${ count } times `
    }, [ count ] )
    return ( 
        <div>
         <button onClick={ () => setCount( count + 1 ) }>
            clicked { count } times
         </button>
         <button onClick={ () => setName( 'Shubham' ) }>
            ABC { name }
         </button>
        </div>
    )
 }

 export default EffectHookExample1