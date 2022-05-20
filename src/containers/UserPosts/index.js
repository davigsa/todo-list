import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { PostsList } from "../../components/PostsList"
import { CreatePost } from '../../components/CreatePost'
import { UserPostsWrapper } from './styles'
import { TodoContext } from '../../contexts/TodoContext'

function UserPosts() {
    const location = useLocation()
    const { data, setData, choosenOne, setChoosenOne } = useContext(TodoContext)
    const [dataFiltered, setDataFiltered] = useState([])

    useEffect(() => {
        if (choosenOne === 0) {
            setChoosenOne(location.pathname.split("/")[location.pathname.split("/").length - 1])
        }

        setDataFiltered(data?.filter(i => i.userId === choosenOne))
    }, [data, choosenOne, setChoosenOne, location.pathname])

    return (
        <UserPostsWrapper>
            <h2>Usuário {choosenOne}</h2>
            <CreatePost userId={choosenOne} setData={setData} data={data}/>
            <PostsList posts={dataFiltered} />
        </UserPostsWrapper>
    )
}

export { UserPosts }