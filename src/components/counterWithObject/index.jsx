import React, { useState } from 'react'

const ObjectCounter = () => {
    const initialState = 0
    const [ name, setName ] = useState({ firstName: '', lastName: '' } )

    return (
    <div>
        Object Counter: { name }
    </div>
    )
 }

export default ObjectCounter