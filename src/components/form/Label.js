import styles from './Label.module.css'
function Label({text, nome}){
    return(
        <div className={styles.label}>
            <label htmlFor={nome}> {text}   </label>
        </div>
    )
}

export default Label;