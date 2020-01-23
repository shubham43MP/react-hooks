import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching7 = ( ) => {
    const [ post, setPost ] = useState( {} )
    const [ id, setId ] = useState( 1 )
    const [ idButtonClick, setIdButtonClick ] = useState( 1 )


    useEffect ( () => {
        const dataFetch = async () => {
            const response = await axios.get(  `https://jsonplaceholder.typicode.com/posts/${ idButtonClick }` )
            const { data } = response
            setPost( data )
        }
        try {
            dataFetch()
        } catch ( e ) {
            console.log( 'error', e )
        }
        console.log( 'mount', )
    }, [ idButtonClick ] ) // Mount

    return ( 
        <div>
            <input type="text" value={ id } onChange={ e => setId( e.target.value ) }/>
            <button onClick={() => setIdButtonClick( id ) }> Fetch Post </button>
            <div> { post.title } </div>
            {/* <ol>
            {
                posts.map( post => <li key ={ post.id }> { post.title }</li> )
            }
            </ol> */}
        </div>
    )
 }

 export default DataFetching7