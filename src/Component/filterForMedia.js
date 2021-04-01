import * as React from 'react'
import Select from 'react-select';
import { yearOptions, seasonOptions } from './options'
import { Option, OptionNames, Input, Div, Li , Ul, Pp } from './styled';
import { gql, useQuery } from '@apollo/client'

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#FCEEB9' : '#7A9867' ,
        padding: 10,
      }),
}

const GET_MEDIA = gql`
    query GetMedia ($search : String, $seasonYear: Int, $season: MediaSeason){
        Page(page: 1, perPage: 12){
            media(search: $search, seasonYear: $seasonYear , season: $season){
                id
                genres
                season
                seasonYear
                title {
                    romaji
                    native
                }
                type
                coverImage{
                    medium
                }
                trailer{
                    site
                }
            }
        }
    }
`


const TypeFilter = () => {

    const [ seaMedia, setSeaMedia ] = React.useState('')
    const [ filters, setFilters ] = React.useState({
        year:'',
        season:'',
        search: seaMedia
    })

    

    const { loading, error, data } = useQuery(GET_MEDIA, {
        variables   : { 
            filters
        },
        pollInterval: 500,
    })
    

    const handleChange = (key) => (e) => {
        const name = key
        setFilters(
          prevState => ({
            ...prevState,
          [name]: e.value
        }))
      }

    console.log(filters, seaMedia, 'data', data)


    return(
        <>
        <Option>
            <OptionNames>&spades; Year</OptionNames>
            <Select
            defaultValue={filters.year}
            onChange={handleChange('year')}
            options={yearOptions}
            styles={customStyle}
            />
        </Option>

        <Option>
        <OptionNames>&spades; Season</OptionNames>
            <Select
            defaultValue={filters.season}
            onChange={handleChange('season')}
            options={seasonOptions}
            styles={customStyle}
            />
        </Option>

        <Option>
        <OptionNames>&spades; Search by name</OptionNames>
            <Input
            type='text'
            onChange={e => setSeaMedia(e.target.value)}
            value={seaMedia}
            />
        </Option>
       
        { loading? <p>loading...</p>: (<>
            {
                data && data.Page.media.map( i => 
                    <Div>
                        <img src={i.coverImage.medium} />
                        <Pp> &nbsp;{i.title.native} <br />
                        &nbsp; {i.seasonYear} &nbsp; {i.season} <br />
                        &nbsp; Type: {i.type} <br />
                        &nbsp; Genres: {i.genres.map( g => <> &bull; {g} </>)}
                        </Pp>
                    </Div>
                )
            }
        </>
        )}
        </>
    )
}

export default TypeFilter