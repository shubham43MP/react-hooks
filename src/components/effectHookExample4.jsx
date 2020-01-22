import React, { useEffect, useState } from 'react'
import HookMouse from './effectHookExample3'

const EffectHookExample4 = ( props ) => {

    // THis will Implement useEffect as componentDidMount
    const [ display, setDisplay ] = useState( true )

    // useEffect( () => {
    //     console.log( 'useEffect called' )
    //     window.addEventListener( 'mousemove', logMousePosition )
    //     }, [] )
    // const logMousePosition = e => {
    //     console.log( 'Mouse Event' )
    // }
    return ( 
        <div>
            <button onClick={ () => setDisplay( !display ) }>
                Toggle Display
            </button>
            { display && < HookMouse /> }
        </div>
    )
 }

 export default EffectHookExample4