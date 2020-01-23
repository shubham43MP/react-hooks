import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = ( ) => {
    const [ posts, setPosts ] = useState( [] )


    useEffect ( () => {
        const dataFetch = async () => {
            const response = await axios.get(  'https://jsonplaceholder.typicode.com/posts' )
            const { data } = response
            setPosts( data )
        }
        try {
            dataFetch()
        } catch ( e ) {
            console.log( 'error', e )
        }
        console.log( 'mount' )
    }, [] ) // Mount

    return ( 
        <div>
            {
                posts.map( post => <li key ={ post.id }> { post.title }</li> )
            }
        </div>
    )
 }

 export default DataFetching