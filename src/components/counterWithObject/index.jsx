import React, { useState } from 'react'

const ObjectCounter = () => {
    const [ name, setName ] = useState({ firstName: '', lastName: '' } )

    return (
    <div>
        Your Name : { name.firstName + ' ' + name.lastName }
        <input
         type = "text"
         value={ name.firstName }
         onChange={ e => setName( { ...name, firstName: e.target.value } ) }
        />
        <input
         type = "text"
         value={ name.lastName }
         onChange={ e => setName( {  ...name, lastName: e.target.value } ) }
        />
    </div>
    )
 }

export default ObjectCounter