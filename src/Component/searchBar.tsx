import * as React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display      : inline-block;
    border-radius: 5px;
    padding      : 0.5rem 0;
    margin       : 0.5rem 1rem;
    width        : 11rem;
    background   : transparent;
    color        : white;
    border       : 2px solid white;
    font-size    : 15px
`

const Input = styled.input`
    width        : 20rem;
    height       : 2rem;
    border-radius: 5px;
`

const SearchBar: React.FC = () => {
    return(
        <>
        <form>
            <Input
            type = 'text'
            // onChange={myChangeHandler}
            />
            <Button>Search by name</Button>

        </form>
        </>
    )
}

export default SearchBar