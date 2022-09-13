import {useState} from 'react';
import Button from './Button';
import Input from './Input';
import styles from './Cadastro.module.css';

function Cadastro(){

    const [nome, setNome] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()
    const [userNome, setUserNome] = useState()
    const [userTelefone, setUserTelefone] = useState()
    const [userEmail, setUserEmail] = useState()


    function cadastrarUsuario(e){
        e.preventDefault();
        setUserNome(nome);
        setUserTelefone(telefone);
        setUserEmail(email);
    }

   return(
    <div className={styles.container}>
      <div className={styles.cadastro}>
        <form onSubmit={cadastrarUsuario}>
                <div>
                    <Input
                    text="nome" 
                    name="nome"
                    type="text"
                    placeholder="Digite seu nome" 
                    onChange={(e) => setNome(e.target.value)} 
                    />
                </div>
                <div>
                    <Input
                        text="telefone"
                        name="telefone" 
                        type="number" 
                        placeholder="Digite seu número"
                        onChange={(e) => setTelefone(e.target.value)}
                    
                    />
                </div>
                <div>
                    <Input
                        text="email"
                        type="email" 
                        name="email" 
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>
            
                <div>
                    <Button/>
                </div>

            </form>
      </div>
       
     <div>
     {userNome && (
                <div>
                    <p> Nome é:{userNome}</p>
                  
                </div>
            ) }

            {userTelefone && (
                <div>
                    <p> Telefone é:{userTelefone}</p>
                  
                </div>
            ) }

        {userEmail && (
                <div>
                    <p> Email é:{userEmail}</p>
                  
                </div>
            ) }

     </div>



        
    </div>
   )
}


export default Cadastro;