import * as React from 'react'
import styled from 'styled-components'
import { gql, useQuery } from '@apollo/client'
import { PageForCharacter } from '../../Type'

const Button = styled.button`
    display      : inline-block;
    border-radius: 5px;
    padding      : 0.5rem 0;
    margin       : 0.5rem 1rem;
    width        : 18rem;
    background   : white;
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
    margin-left    : 50px;
    width          : 90%
`
const Tr = styled.tr`
    border: 1px solid white;
`


const GET_Character = gql`
    query GetCharacter  ($search : String!) {
        Page(page:1, perPage: 5){
            characters(search: $search){
                id
                name {
                  full
                  native
                }
                description
            }
        }
    }
`

const SearchBarByYear: React.FC = () => {

    const [thisCha, setCha] = React.useState('')

    const { loading, error, data } = useQuery<PageForCharacter>(GET_Character, {
        variables: { search: thisCha },
        // pollInterval: 600,
    })
    

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCha(e.target.value)
    }

    console.log("shi", thisCha, data)


    return(
        <>
        <form>
            <Button>Search by Character Name</Button>
            <Input
            type     = 'text'
            onChange = {changeHandler}
            value    = {thisCha}
            />
        </form>

        {loading? <p>Loading...</p> : (<>
                <Table>
                     <Tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>romaji Name</th>
                        <th>Description</th>
                    </Tr>
                {data && data.Page.characters.map( i => 
                    <Tr>
                        <td>{i.id}</td>
                        <td>{i.name.native}</td>
                        <td>{i.name.full}</td>
                        <td>{i.description}</td>
                    </Tr>
                )}
                </Table>
                </>
            )}
            {error ? <p>{`Error! ${error}`}</p> : null }
        </>
    )
}

export default SearchBarByYear