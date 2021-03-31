import * as React from 'react'
import Select from 'react-select';
import { Option, OptionNames, Input, Div, Li , Ul} from './styled';
import { gql, useQuery } from '@apollo/client'
import { displayStaff } from './options'
import styled from 'styled-components';

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#EC9152' : '#6B5048' ,
        padding: 10,
      }),
}

const Pp = styled.p` color: #FEF7D7 `


const GET_STAFF = gql`
    query GetStaff ($search : String){
        Page(page: 1, perPage: 12){
            staff(search: $search){
                name {
                  first
                  last
                  full
                  native
                }
                language
                image{
                  medium
                }
                staffMedia{
                    edges{
                     staffRole
                    }
                    nodes{
                      title {
                        native
                        userPreferred
                      }
                    }
                  }
                characters{
                    edges{
                        role
                      }
                  nodes{
                    name {
                      full
                      native
                    }
                  }
                }
            }
        }
    }
`


const StaffFilter = () => {

    const [ seaStaff, setSeaStaff ] = React.useState('')
    const [ display, setDisplay ] = React.useState([])

    const handleChange = (e) => {
        setSeaStaff(e.target.value)
    }

    const { loading, error, data } = useQuery(GET_STAFF, {
        variables   : { 
            search: seaStaff
        },
        pollInterval: 500,
    })

    React.useEffect(()=> {

    }, [display])

   
    console.log('staff', data, display)
    

    return(
        <>
         <Option>
            <OptionNames>&clubs; Return Information</OptionNames>
            <Select
                value={display}
                onChange={setDisplay}
                options={displayStaff}
                styles={customStyle}
                />
        </Option>
        <Option>
            <OptionNames>&clubs; Search by name</OptionNames>
                <Input
                type='text'
                onChange={handleChange}
                value={seaStaff}
                />
        </Option>
        <br />
        {loading ? <p>loading...</p> : (<>
            {
            data && data.Page.staff.map( i => 
                <Div>
                    <img src={i.image.medium} />
                    <Pp> &nbsp; {i.name.native } {i.name.full}  <br />
                    &nbsp; Language: {i.language}
                     
                     {display.value == 'filmography' &&  i.staffMedia.nodes[1]?  (
                         <Ul>
                            <Li>{i.staffMedia.nodes[0].title.native}  <br />  Role: {i.staffMedia.edges[0].staffRole}</Li>
                            <Li>{i.staffMedia.nodes[1].title.native} <br />  Role: {i.staffMedia.edges[1].staffRole}</Li>
                         </Ul>
                     ) : null}
                    </Pp>
                </Div>
            )
        }
        
        </>)}
        <br />

        
       

        </>
    )
}

export default StaffFilter