import {useState} from 'react';

function App() {
  const [aluno,setAluno] = useState('Aluno SI')

function changeName(){
  setAluno('Keren')
  return(
    <div>
      <h1>Aula 03</h1>
      <h2>Olá {aluno}</h2>
      <button onClick={changeName}>
        Mudar nome
      </button>
      <Name aluno = "Keren" idade = "20"/>   
      </div>
  );
  }
}
export default App;

function Nome(props){
  return(
    <p>(props.nome)- (props.idade)</p>
  );
}
