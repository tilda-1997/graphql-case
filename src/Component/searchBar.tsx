import * as React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'

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

// const GET_NAME = gql`
//     query GetNames{
//         Page(page:1, perPage: 10){
//             media(search: "eva" ){
//                 id
//                 genres
//                 title {
//                     romaji
//                     native
//                 }
//         }
//     }
// }
// `

// export interface PageData {
//     media: [],
//     __typename: String
// }
interface Media {
    id: number,
    genres: [],
    title: {}
}
interface Page {
    Page: {
        media: Media[],
        __typename: string
    }
}

const SearchBarByTitle = () => {

    const [thisTitle, setTitle] = React.useState('')
    const { loading, error, data } = useQuery<Page>(GET_NAME, {
        variables: { search: thisTitle },
        pollInterval: 500,
    })
    // const { loading, error, data } = useQuery(GET_NAME)
    
    const [isOpen, setOpen] = React.useState(false)
   
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        
    }

    const getAnime = () => {
        setOpen(true);
    }

    console.log('hhh', thisTitle, data)
  
    return(
        <>
        <form>
            <Input
            type = 'text'
            onChange={changeHandler}
            value={thisTitle}
            />
            <Button
            // onClick={getAnime}
            >Search by title</Button>
        </form>
        
        {loading? <p>Loading...</p> : (
            <p>{data && data.Page.media.map( i => <tr><td>{i.id}</td></tr>)}</p>
        )}
        {error? <p>{`Error! ${error}`}</p> : null }
        </>
    )
}

export default SearchBarByTitle