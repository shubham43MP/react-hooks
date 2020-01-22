import React, { useEffect, useState } from 'react'

const IntervalHookCounter5 = ( props ) => {
    const [ count, setCount ] = useState( 0 )

    useEffect ( () => {
        const interval = setInterval( tick, 1000 )
        return () => {
            clearInterval( interval ) //Unmount
        }
    }, [ count ] ) // Mount

    const tick = () => {
        setCount( count + 1 )
    }

    return ( 
        <div>
            { count }
        </div>
    )
 }

 export default IntervalHookCounter5