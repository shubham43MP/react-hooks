import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = ( state, action ) => {
    switch( action.type ){
        case 'FETCH_SUCCESS': 
        return {
            ...state,
            loading: false,
            post: action.value,
            error: null
        }

        case 'FETCH_FAILURE': 
        return {
            ...state,
            loading: false,
            post: {},
            error: 'Something Went Wrong!'
        }

        default :
        return state
    }
}

const DataFetching2 = ( ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState )

    useEffect( () => {
        const dataFetching = async () => {
            try {
							const response = await axios.get(  'https://jsonplaceholder.typicode.com/posts/5' )
								const { data } = response
                dispatch ( { type: 'FETCH_SUCCESS', value: data })
            } catch ( e ) {
								dispatch ( { type: 'FETCH_FAILURE' })
						}
				}
				dataFetching()
    }, [] )
    return ( 
        <div>
					{ state.loading ? 'Loading........' : state.post.title }
					{ state.error ? state.error  : null }
        </div>
    )
 }

 export default DataFetching2