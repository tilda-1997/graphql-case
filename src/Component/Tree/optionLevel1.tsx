import { InputRadio, Label } from '../styled'

const SearchType = () => {

    return(
        <>
        <div>
            <InputRadio type="radio" name="level1" value="media" />
            <Label>Media</Label>
        </div>
        
        <div>
            <InputRadio type="radio" name="level1" value="character" />
            <Label>Character</Label>
        </div>
       
        <div>
            <InputRadio type="radio" name="level1" value="staff"  />
            <Label>Staff</Label>
        </div>
        

        </>
    )
}

export default SearchType