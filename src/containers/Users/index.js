import React, { useContext } from 'react'

import { UsersList } from '../../components/UsersList'
import { TodoContext } from '../../contexts/TodoContext'

function Users() {
    const { data, setChoosenOne } = useContext(TodoContext)

    const seen = new Set();
    
    const filteredArr = data.filter(a => {
        const duplicate = seen.has(a.userId);
        seen.add(a.userId);

        return !duplicate;
    })

    return (
        <UsersList arr={filteredArr} setUserId={setChoosenOne}/>
    )
}

export { Users }