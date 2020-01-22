import React, { useState } from 'react'

const ObjectCounter = () => {
    const [ name, setName ] = useState({ firstName: 'Tom', lastName: 'John' } )

    const setNameRandom = () => {
        setName( prevName => ( { firstName: 'New',  lastName: 'Name' } ) )
    }

    return (
    <div>
        Object : { name.firstName + ' ' + name.lastName }
        <button onClick = { setNameRandom }> Set Name </button>
    </div>
    )
 }

export default ObjectCounter