import styled from 'styled-components'

export const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
`

export const ListItem = styled.li`
    width: 100px;
    margin: 8px;
    border: 1px solid #000;
    text-align: center;
    cursor: pointer;
    transition: background-color ease-in .3s;

    &:hover {
        background-color: #e0e0e0;
    }
`