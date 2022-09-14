import styles from './Input.module.css';

function Input({ nome, type, placeholder, text, onChange}){
    return (
        <div class={styles.dInputs}>
             <input 
                text={text}
                name={nome}
                type={type}
                placeholder={placeholder}
                onChange={onChange} />
        </div>
    )
}

export default Input;