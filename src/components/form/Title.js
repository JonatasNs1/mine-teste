import styles from './Title.module.css';


function Title({text,type}){
    return (
        <div  className={`${styles.title} ${styles[type]}`}>
            <h1 >
                {text}
            </h1>
        </div>
    )
}

export default Title;