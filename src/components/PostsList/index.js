import React from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 250px;
    margin: 8px;

    fieldset {
        padding: 8px;
    }
`

function PostsList({ posts }) {
    return (
        <ListWrapper>
            {posts
                ? posts.map((item, i) => {
                    return (
                    <ListItem key={i}>
                        <fieldset>
                            <legend>Usuário {item.userId}:</legend>
                            <div>
                                <input type="checkbox" id={item.id} name={item.id} checked={item.completed} />
                                <label for={item.id}>{item.title}</label>
                            </div>
                        </fieldset>
                    </ListItem>
                    )
                })
                : <li>Não há nenhum item.</li>
            }
        </ListWrapper>
    )
}

export { PostsList }