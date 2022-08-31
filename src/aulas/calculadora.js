import {useState} from 'react';

function App() {
  const [valor1,setValor1] = useState('')
  const [valor2,setValor2] = useState('')

function Somar(){
  valor1 + valor2
}
function Multiplicar(){
  valor1 * valor2
}
function Dividir(){
  valor1 / valor2
}
function Subtrair(){
  valor1 - valor2
}
  return(
    <div>
      <h1>Calculadora</h1> 
      
      <form>
        <label>Primeiro Valor: </label> 
        <input value={valor1} onChange={(e) => setValor1(e.target.value)} />
        <label>Segundo Valor: </label> 
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
    </div>
  );
  }

export default App;
