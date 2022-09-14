import styles from './Button.module.css';


function Button ({text}){
    return (
        <div className={styles.btnControle}>
            <button className={styles.btnLogin}> {text} </button>
        </div>
    )
}

export default Button;