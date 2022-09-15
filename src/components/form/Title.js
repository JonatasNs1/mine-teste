// import styles from './Title.module.css';
import {Divtitle, TitleCadastro } from './Title.module';


function Title({text,type}){
    return (
        <Divtitle  >
            <TitleCadastro type={type}>
                {text}
           
            </TitleCadastro>
        </Divtitle>
    )
}
// className={`${styles.Divtitle} ${styles[type]}`}
export default Title;