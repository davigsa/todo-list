import styled from 'styled-components'

export const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    padding: 0;
`

export const ListItem = styled.li`
    width: 250px;
    margin: 8px;

    fieldset {
        padding: 8px;
    }
`