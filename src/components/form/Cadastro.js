import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import play from '../../imc/PlayStation.svg';
import Container from '../layout/Container';
import Title from './Title';
import Label from './Label';
import {
    DivTexto,
    DivBtnSingUp,
    DivImage,
    DivBemVindo,
    DivTitulo,
    Hello,
    DivBtnSingIn,
    DivCadastro,
    DivTextCenter,
    SpanText1,
    SpanText2,
    DivMessage
} from './Cadastro.module';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    nome: yup.string().required("O nome é obrigatório"),
    telefone: yup.string().min(12, 'O telefone tem que ter pelo menos 12 digitos').required("O telefone é obrigatório"),
    email: yup.string().email('Digite um email valido').required("O email é obrigatório"),
}).required();

function Cadastro() {

    const [nome, setNome] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [userNome, setUserNome] = useState()
    const [userTelefone, setUserTelefone] = useState()
    const [userEmail, setUserEmail] = useState()


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function onSubmit(userData) {
        console.log(userData);
        //  e.preventDefault();
        setUserNome(nome);
        setUserTelefone(telefone);
        setUserEmail(email);

       alert(`
                Seu nome é: ${userData.nome}
                Seu telefone é: ${userData.telefone}
                Seu email é: ${userData.email}
                `)
    }


    return (

        <>

            <Container customClass="min-height">

                <Hello>
                    <DivTitulo>
                        <Title text="Welcome Back!" />
                    </DivTitulo>
                    <DivTexto>
                        <p>To kepp connected with us please login with your personal info</p>
                    </DivTexto>
                    <DivBtnSingIn >
                        <Button text="Sing-in" />
                    </DivBtnSingIn>
                </Hello>

                <DivCadastro >

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DivBemVindo>
                            <Title text="Create Account" />
                        </DivBemVindo>
                        <DivImage>
                            <img src={play} alt="Logo" />
                        </DivImage>
                        <Label
                            htmlFor="nome"
                            text="Nome"
                        />
                          <Input 
                              
                               {...register("nome", { required: true })}
                              nome="nome"
                              placeholder="Digite seu nome"
                            />
                    
                        <DivMessage>
                            <span>{errors.nome?.message}</span>
                        </DivMessage>
                        <Label
                            htmlFor="telefone"
                            text="Telefone"
                        />
                         <Input 
                              
                              {...register("telefone", { required: true })}
                             nome="telefone"
                             type="number"
                             placeholder="Digite seu telefone"
                           />
                     
                        <DivMessage>
                            <span>{errors.telefone?.message}</span>
                        </DivMessage>

                        <Label
                            htmlFor="email"
                            text="Email"
                        />
                        <Input
                            {...register("email")}
                            nome="email"
                            type="email"
                            placeholder="Digite seu email"
                        /> 
                        <DivMessage>
                            <span>{errors.email?.message}</span>
                        </DivMessage>
                      
                        <DivBtnSingUp>

                            <Button text="Sing-up" />
                        </DivBtnSingUp>

                        <DivTextCenter>
                            <SpanText1>Não possui conta? </SpanText1>
                            <SpanText2 href="#">
                                <span> Criar Conta</span>
                            </SpanText2>
                        </DivTextCenter>

                    </form>
                </DivCadastro>

            </Container>

        </>
    )
}


export default Cadastro;