// import styles from './Input.module.css';
import {DivInputs, Inputs } from './Input.module';
function Input({ nome, type, placeholder, text, onChange}){
    return (
        <DivInputs>
             <Inputs 
                text={text}
                name={nome}
                type={type}
                placeholder={placeholder}
                onChange={onChange} />
        </DivInputs>
    )
}

export default Input;