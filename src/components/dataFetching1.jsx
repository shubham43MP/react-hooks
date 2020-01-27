import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetching = ( ) => {
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( '' )
    const [ post, setPost ] = useState( {} )

    useEffect( () => {
        const dataFetch = async () => {
            try {
                const response = await axios.get(  'https://jsonplaceholder.typicode.com/posts/5' )
                const { data } = response
                setLoading( false )
                setPost( data )
                setError( '' )
            }  catch ( e ) {
                setLoading( false )
                setPost( {} )
                setError( 'Something Went Wrong' )
                console.log( 'error', e )
            }
        }
        dataFetch()
    }, [] )
    return ( 
        <div>
            { loading ? 'Loading.........' : post.title }
            { error ? error : null }
        </div>
    )
 }

 export default DataFetching