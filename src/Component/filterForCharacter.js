import * as React from 'react'
import Select from 'react-select';
import { Option, OptionNames, Input, Div, Li , Ul, Link } from './styled';
import { gql, useQuery } from '@apollo/client'
import { displayCharacter } from './options'
import styled from 'styled-components';

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#EC9152' : '#6B5048' ,
        padding: 10,
      }),
}

const Pp = styled.p` color: #FEF7D7 `


const GET_CHARACTER = gql`
    query GetCharacter ($search : String){
        Page(page: 1, perPage: 12){
            characters(search: $search){
                name {
                  full
                  native
                }
                  image {
                  large
                  medium
                }
                siteUrl
                media{
                  edges{
                    id
                    characterRole
                  }
                  nodes{
                    id
                    title{
                      native
                    }
                    type
                    countryOfOrigin
                    popularity
                    coverImage{
                      large
                    }
                  }
              }
            }
        }
    }
`


const CharacterFilter = () => {

    const [ seaCharacter, setSeaCharacter ] = React.useState('')
    const [ display, setDisplay ] = React.useState([])

    const handleChange = (e) => {
        setSeaCharacter(e.target.value)
    }

    const { loading, error, data } = useQuery(GET_CHARACTER, {
        variables   : { 
            search: seaCharacter
        },
        pollInterval: 500,
    })

    React.useEffect(()=> {

    }, [display, seaCharacter])

   
    console.log('character', data, display)
    // console.log('ddd', display, display.length)
    

    return(
        <>
         <Option>
            <OptionNames>&diams; Return Information</OptionNames>
            <Select
                value={display}
                onChange={setDisplay}
                options={displayCharacter}
                styles={customStyle}
                />
        </Option>
        <Option>
            <OptionNames>&diams; Search by name</OptionNames>
                <Input
                type='text'
                onChange={handleChange}
                value={seaCharacter}
                />
        </Option>
        <br />
        {loading ? <p>loading...</p> : (<>
            {
            data && data.Page.characters.map( i => 
                <Div>
                    <img src={i.image.medium}  />
                    <Pp> &nbsp; {i.name.native} <br />
                    { display.value =='source'? (<>
                        &nbsp; Source: {i.media.nodes[0].title.native} <br/>
                        &nbsp; Role: {i.media.edges[0].characterRole}
                    </>): null } <br/>
                    <Link href={i.siteUrl}> &nbsp; &rarr; AniLink...</Link>
                    </Pp>
                </Div>
            )
        }
       
        </>)}
       

        

        </>
    )
}

export default CharacterFilter