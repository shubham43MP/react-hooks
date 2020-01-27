import React, { useState, useMemo } from 'react'

const Counter = () => {
    const [ countOne, setCountOne ] = useState( 0 )
    const [ countTwo, setCountTwo ] = useState( 0 )

    const incrementOne = () => {
        setCountOne( countOne + 1 )
    }

    const incrementTwo = () => {
        setCountTwo( countTwo + 1 )
    }

    const isEven = useMemo( () => {
        let i = 0 
        while ( i < 2000000000 ) i++
        return countOne % 2 === 0
    }, [ countOne ] )

    return (
    <div>
        <button onClick={ incrementOne }>Increment One - { countOne }</button>
    <span> { isEven ? 'Even' : 'Odd' } </span>
        <div>
            <button onClick={ incrementTwo }>Increment Two - { countTwo }</button>
        </div>
    </div>
    )
 }

export default Counter
