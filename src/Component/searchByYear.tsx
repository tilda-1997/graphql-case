import * as React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

const Button = styled.button`
    display      : inline-block;
    border-radius: 5px;
    padding      : 0.5rem 0;
    margin       : 0.5rem 1rem;
    width        : 11rem;
    background   : white;
    border       : 2px solid white;
    font-size    : 15px
`

const Input = styled.input`
    width        : 20rem;
    height       : 2rem;
    border-radius: 5px;
`

const GET_NAME = gql`
    query GetNames {
        Page(page:1, perPage: 10){
            media(search: "1997"){
                id
                genres
                title {
                    romaji
                    native
                }
        }
    }
}
`

const SearchBarByYear: React.FC = () => {

    const { loading, error, data } = useQuery(GET_NAME)

    const [thisTitle, setTitle] = React.useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const getAnime = () => {
        
    }

    return(
        <>
        <form>
            <Input
            type = 'text'
            onChange={changeHandler}
            value={thisTitle}
            />
            <Button
            onClick={getAnime}
            >Search by Year</Button>

        </form>
        </>
    )
}

export default SearchBarByYear