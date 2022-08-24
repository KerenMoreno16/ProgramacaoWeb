import {useState} from 'react';

function App() {
  const [aluno,setAluno] = useState('Aluno SI')
  return (
    <div>
      <h1>Aula 03</h1>
      <h2>Olá {aluno}</h2>
      <Nome name="Keren Moreno" idade= "20"/>
    </div>
  );
}

export default App;

function Nome(props){
  return(
    <p>(props.nome)- (props.idade)</p>
  );
}
