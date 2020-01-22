import React, { useEffect, useState } from 'react'

const EffectHookExample3 = ( props ) => {

    // THis will Implement useEffect as componentDidMount

    const [ x, setX ] = useState( 0 )
    const [ y, setY ] = useState( 0 )

    useEffect( () => {
        console.log( 'useEffect called' )
        window.addEventListener( 'mousemove', logMousePosition )
        return () => {
            console.log( 'UNMOUNTING' )
            window.removeEventListener( 'mousemove', logMousePosition )
        }
        }, [] )
    const logMousePosition = e => {
        console.log( 'Mouse Event' )
        setX( e.clientX )
        setY( e.clientY )
    }
    return ( 
        <div>
            Hooks X - { x }  Y - { y }
        </div>
    )
 }

 export default EffectHookExample3