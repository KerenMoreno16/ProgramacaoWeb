import {useState} from 'react';

function App() {
  const [valor1,setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [result, setResult] = useState('')

  
function Somar(){
  setResult(parseInt(valor1) + parseInt(valor2));
}
function Multiplicar(){
  setResult(parseInt(valor1) * parseInt(valor2));
}
function Dividir(){
  setResult(parseInt(valor1) / parseInt(valor2));
}
function Subtrair(){
  setResult(parseInt(valor1) - parseInt(valor2));
}
  return(
    <div>
      <h1>Calculadora</h1> 
      
      <form>
        <label>Primeiro Valor: </label> 
        <input value={valor1} onChange={(e) => setValor1(e.target.value)} />
        
        
        <label> Segundo Valor: </label> 
        <input value={valor2} onChange={(e) => setValor2(e.target.value)} />
      </form>
      <button onClick={Somar}>
           + 
      </button>
      <button onClick={Subtrair}>
           -   
      </button>
      <button onClick={Dividir}>
           / 
      </button>
      <button onClick={Multiplicar}>
           * 
      </button>     
      <h3>Resultado: {result}</h3> 


    </div>
  );
  }

export default App;
