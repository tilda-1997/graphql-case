import * as React from 'react'
import { InputRadio, Label } from './styled'

const MediaOption = () => {

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
       
       
        

        </>
    )
}

export default MediaOption