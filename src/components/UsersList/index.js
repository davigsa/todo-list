import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

function UsersList({ arr, setUserId }) {
    return (
        <S.ListWrapper>
            {arr
                ? arr.map((user, i) => {
                    return(
                        <Link to={`users/${user.userId}`}>
                            <S.ListItem key={i} onClick={() => setUserId(user.userId)}>
                                <p>{user.userId}</p>
                            </S.ListItem>
                        </Link>
                    )
                })
                : <li>Não há usuário.</li>
            }
        </S.ListWrapper>
    )
}

export { UsersList }