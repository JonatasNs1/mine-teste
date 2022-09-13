function Input({text, nome, type, placeholder, onChange}){
    return (
        <>
             <input 
                text={text}
                name={nome}
                type={type}
                placeholder={placeholder}
                onChange={onChange} />
        </>
    )
}

export default Input;