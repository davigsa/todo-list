import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ButtonWrapper = styled.button`
    padding: 8px;
    border-radius: 8px;
    background-color: #00e88f;
    cursor: pointer;
    border: none;
    transition: background-color ease-in .3s ;
    
    &:hover {
        background-color: #00f888;
    }
`

const NewPostForm = styled.form`
    padding: 16px;
    border: 1px solid #000;
    width: fit-content;
    border-radius: 8px;
    margin-top: 8px;

    input[type="text"] {
        border-radius: 8px;
        border: 1px solid #e0e0e0;
        padding: 4px;
        margin-right: 8px;
    }
`

function CreatePost({ userId, setData, data}) {
    const [createPost, setCreatePost] = useState(false)
    const [checked, setChecked] = useState(false)
    const [title, setTitle] = useState('')
    //const { data, setData } = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`https://jsonplaceholder.typicode.com/todos`, 
        {
            userId: userId,
            title: title,
            completed: checked
        })
        .then(res => {
            setData([ res.data, ...data,])
            setTitle('')
            setChecked(false)
        })
    }

    return (
        <>
            <ButtonWrapper onClick={() => setCreatePost(!createPost)}>+1 Afazer</ButtonWrapper>
        {
            createPost && 
            <NewPostForm onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='Título' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <input type="checkbox" id='new-checkbox' name='new-checkbox' checked={checked} onClick={() => setChecked(!checked)} />
                <label htmlFor='new-checkbox' >Está completa?</label>
                <button type='submit'>Adicionar</button>
            </NewPostForm>
        }
        </>
    )
}

export { CreatePost }