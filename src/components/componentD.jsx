import React, { useContext } from 'react'
import ComponentE from './componentE'
import { UserContext, ChannelContext } from '../App'

const ComponentD = ( ) => {

    const user = useContext( UserContext )
    const channel = useContext( ChannelContext )
    return ( 
        <div>
            After useContext : { user } ---------------- { channel }
            <ComponentE />
        </div>
    )
 }

 export default ComponentD