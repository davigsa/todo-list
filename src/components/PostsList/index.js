import React from 'react'
import axios from 'axios'

import * as S from './styles'

function PostsList({ posts }) {
    const changeHandler = (e, item) => {
        e.preventDefault()
        const inputItem = document.querySelector(`input#item-${item.id}`)

        axios.patch(`https://jsonplaceholder.typicode.com/todos/${item.id}`, 
        {
            userId: item.userId,
            title: item.title,
            completed: !item.completed
        })
        .then(() => inputItem.checked = !inputItem.checked)
    }

    return (
        <S.ListWrapper>
            {posts
                ? posts.map((item, i) => {
                    return (
                    <S.ListItem key={i} onClick={(e) => changeHandler(e, item)}>
                        <fieldset>
                            <div>
                                <input type="checkbox" id={`item-${item.id}`} name={item.id} checked={item.completed} />
                                <label htmlFor={item.id}>{item.title}</label>
                            </div>
                        </fieldset>
                    </S.ListItem>
                    )
                })
                : <li>Não há nenhum item.</li>
            }
        </S.ListWrapper>
    )
}

export { PostsList }