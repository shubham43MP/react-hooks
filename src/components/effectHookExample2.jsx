import React, { useEffect, useState } from 'react'

const EffectHookExample2 = ( props ) => {
    // This example tis tailor made for understanding hooks conditionality

    const intialState = 0
    const [ count, setCount ] = useState( intialState )
    const [ name, setName ] = useState( '' )

    useEffect( () => {
        document.title = `You have clicked ${ count } times `
    }, [ count ] )
    // this [ count ] ( array of values to be specified ) achieves the same as prevProps.count !== this.state.count
    return ( 
        <div>
         <button onClick={ () => setCount( count + 1 ) }>
            clicked { count } times
         </button>
         <input type="text" value={ name } onChange={ e => setName( e.target.value ) }/>
        </div>
    )
 }

 export default EffectHookExample2