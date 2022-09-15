
import { DivLabel, TextLabel } from './Label.module';

function Label({text, nome}){
    return(
        <DivLabel >
            <TextLabel htmlFor={nome}> {text}   </TextLabel>
        </DivLabel>
    )
}

export default Label;