import MediaOption from './Tree/level2_Media'
import SearchType from './Tree/optionLevel1'
import { Grid } from './styled'
import CharacterOption from './Tree/level2_Character'
import TypeFilter from './filter'

const DynamicSearch = () => {

    return(
        <Grid>
            {/* <div><SearchType /></div>
            <MediaOption />
            <CharacterOption /> */}

            <TypeFilter />
    
        </Grid>
    )
}

export default DynamicSearch