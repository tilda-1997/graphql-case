import MediaOption from './level2_Media'
import SearchType from './optionLevel1'
import { Grid } from './styled'
import CharacterOption from './level2_Character'
import TypeFilter from './filter'

const DynamicSearch = () => {

    return(
        <Grid>
            <div><SearchType /></div>
            <MediaOption />
            <CharacterOption />

            <TypeFilter />
    
        </Grid>
    )
}

export default DynamicSearch