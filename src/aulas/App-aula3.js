import {useState} from 'react';

function App() {
  const [aluno,setAluno] = useState('')
  const [email,setEmail] = useState('')
  const [idade,setIdade] = useState('')



function changeName(){
  setAluno('Keren')
}
  return(
    <div>
      <h1>Aula 03</h1>
      <h2>Olá {aluno}</h2>
      <h2>Seu email é: {email}</h2>
      <h2>Você tem {idade}</h2>
      <button onClick={changeName}>
        Mudar nome
      </button>
      <Name aluno = "Keren" idade = "20" email="kerenbernal@unasp.com"/>   
      
      <form>
        <label>Nome: </label> 
        <input placeholder='Digite seu nome' value={aluno} onChange={(e) => setAluno(e.target.value)} />
        <label>Email: </label> 
        <input placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Idade: </label> 
        <input placeholder='Digite sua idade' value={idade} onChange={(e) => setIdade(e.target.value)} />
      </form>
    </div>
  );
  }
  function Name(props){
    return(
      <p>{props.aluno} - {props.idade}</p>
    );
  }
export default App;
