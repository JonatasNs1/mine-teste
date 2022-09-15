import styles from './Container.module.css';
import { DivContainer } from './Container.module';


function Container(props){
    return(
        <DivContainer customClass={props.customClass}>
            {props.children}
        </DivContainer>
    )
}

export default Container;