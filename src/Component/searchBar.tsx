import * as React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'
import { PageForName } from '../Type'

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

const Table = styled.table`
    border-collapse: collapse;
   margin-left: 50px;
    width: 90%
`
const Tr = styled.tr`
border: 1px solid white;
`

const GET_NAME = gql`
    query GetNames ($search : String!){
        Page(page: 1, perPage: 10){
            media(search: $search){
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


const SearchBarByTitle = () => {

    const [thisTitle, setTitle]    = React.useState('')
    const { loading, error, data } = useQuery<PageForName>(GET_NAME, {
        variables   : { search: thisTitle },
        pollInterval: 500,
    })
    
   
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        
    }

    // console.log('hhh', thisTitle, data)
  
    return(
        <>
            <form>
                <Button>Search by title</Button>
                <Input
                type     = 'text'
                onChange = {changeHandler}
                value    = {thisTitle}
                />
            </form>
            
            {loading? <p>Loading...</p> : (<>
                <Table>
                     <Tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>romaji Name</th>
                        <th>Genres</th>
                    </Tr>
                {data && data.Page.media.map( i => 
                    <Tr>
                        <td>{i.id}</td>
                        <td>{i.title.native}</td>
                        <td>{i.title.romaji}</td>
                        <td>{i.genres}</td>
                    </Tr>
                )}
                </Table>
                </>
            )}
            {error? <p>{`Error! ${error}`}</p> : null }
        </>
    )
}

export default SearchBarByTitle