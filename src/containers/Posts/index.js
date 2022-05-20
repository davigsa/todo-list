import React from 'react'

import { PostsList } from "../../components/PostsList"
import { useFetch } from '../../hooks/useFetch'

function Posts() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos')

    return (
        <>
            <PostsList posts={data} />
        </>
    )
}

export { Posts }