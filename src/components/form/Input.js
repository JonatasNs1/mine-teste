// import styles from './Input.module.css';
import { forwardRef } from 'react';
import {DivInputs, Inputs } from './Input.module';

// const Input  = forwardRef((props, ) =>{
//     return (
//         <DivInputs>
//              <Inputs 
//                 ref={register}
//                 />
//         </DivInputs>
//     )
// })
import React from 'react';
const Input = forwardRef((props, ref) => {
    return (
        <DivInputs>
            <Inputs ref={ref} {...props} />
        </DivInputs>
    )
  });

export default Input;