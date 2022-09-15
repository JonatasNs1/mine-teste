import {BtnControle,BtnLogin } from './Button.module';

function Button ({text}){
    return (
        <BtnControle>
            <BtnLogin > {text} </BtnLogin>
        </BtnControle>
    )
}

export default Button;