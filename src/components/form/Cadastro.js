import {useState} from 'react';
import Button from './Button';
import Input from './Input';
import styles from './Cadastro.module.css';
import play from '../../imc/PlayStation.svg';
import Container from '../layout/Container';
import Title from './Title';
import Label from './Label';



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
                Seu nome é:${nome}
                Seu telefone é:${telefone}
                Seu email é:${email}
                `)
    }
    }


   return(

    <>

    <Container customClass="min-height">
         
        <div className={styles.hello}>
            <div>
                <Title text="Welcome Back!"/>
            </div>
            <div>
               <p>To kepp connected with us please login with your personal info</p>
            </div>
            <div>
            <Button text="sing-in"/>
            </div>
        </div>

      <div className={styles.cadastro}>
        <form onSubmit={cadastrarUsuario}>
               <div>
                   <Title text="Create Account"/>
               </div>
               <div className={styles.loader_container}>
                    <img className={styles.loader} src={play} alt="Logo" />
                    {/* <p> aaaaa</p> */}
                </div>
              

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
                
                <div>
                    <Button text="Sing-up"/>
                </div>

                <div className={styles.textCenter}>
                    <span className={styles.txt1}>Não possui conta? </span>
                <a className={styles.txt2} href="#">
                     Criar conta
                </a>
            </div>

            </form>
      </div>


    

        
        
    </Container>

    </> 
   )
}


export default Cadastro;