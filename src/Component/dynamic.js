import MediaOption from './Tree/level2_Media'
import SearchType from './Tree/optionLevel1'
import { Grid } from './styled'
import Select from 'react-select';
import CharacterOption from './Tree/level2_Character'
import MediaFilter from './filterForMedia'
import { Option, OptionNames, Input } from './styled';
import { searchTypes } from './options'
import { useState } from 'react';
import CharacterFilter from './filterForCharacter';
import StaffFilter from './filterForStaff';

const customStyle = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#EC9152' : '#6B5048' ,
        padding: 10,
      }),
}

 
const DynamicSearch = () => {

    const [ chosenType, setChosen ] = useState({})

    console.log('chose', chosenType)

    return(
        <>
        <Grid>
         <Option>
            <OptionNames>Type</OptionNames>
            <Select
                defaultValue={chosenType}
                onChange={setChosen}
                options={searchTypes}
                styles={customStyle}
            />
        </Option>

        {(chosenType.value && chosenType.value === 'character')? <CharacterFilter /> : null}
        { chosenType.value && chosenType.value === 'media'? <MediaFilter /> : null}
        { chosenType.value && chosenType.value === 'staff'? <StaffFilter /> : null}
        </Grid>
        
        </>
    )
}

export default DynamicSearch


  {/* <div><SearchType /></div>
            <MediaOption />
            <CharacterOption /> */}
