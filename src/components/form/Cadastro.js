import {useState} from 'react';
import Button from './Button';
import Input from './Input';
import play from '../../imc/PlayStation.svg';
import Container from '../layout/Container';
import Title from './Title';
import Label from './Label';
import {DivTexto, 
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
        Body} from './Cadastro.module';


function Cadastro(){

    const [nome, setNome] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [userNome, setUserNome] = useState()
    const [userTelefone, setUserTelefone] = useState()
    const [userEmail, setUserEmail] = useState()

    
    function cadastrarUsuario(e){
       
    if(nome == null || telefone == null || email == null){
        alert('Preencha todos os campos')
    }else{
        e.preventDefault();
        setUserNome(nome);
        setUserTelefone(telefone);
        setUserEmail(email);
        
       alert(`
                Seu nome é: ${nome}
                Seu telefone é: ${telefone}
                Seu email é: ${email}
                `)
    }
    }


   return(

    <>
    
    <Container customClass="min-height">
         
        <Hello>
            <DivTitulo>
                <Title  text="Welcome Back!"/>
            </DivTitulo>
            <DivTexto>
               <p>To kepp connected with us please login with your personal info</p>
            </DivTexto>
            <DivBtnSingIn >
                <Button text="Sing-in"/>
            </DivBtnSingIn>
        </Hello>

      <DivCadastro >
        <form onSubmit={cadastrarUsuario}>
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
                text="nome" 
                name="nome"
                type="text"
                placeholder="Digite seu nome" 
                onChange={(e) => setNome(e.target.value)} 
            />
            <Label
                htmlFor="telefone"
                text="Telefone"
            />              
            <Input
                text="telefone"
                name="telefone" 
                type="number" 
                placeholder="Digite seu telefone"
                onChange={(e) => setTelefone(e.target.value)}   
            />
            <Label
                htmlFor="email"
                text="Email"
            />
            <Input
                text="email"
                type="email" 
                name="email" 
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
            /> 
                
            <DivBtnSingUp>
                <Button text="Sing-up"/>
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