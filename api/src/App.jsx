import { useState } from 'react'
import axios from 'axios'

function App() {
  const [name,setName] = useState('');
  const [age,setAge] = useState(null);
  
  async function handleGuessAge(){
    try{
      const api = await axios.get(`https://api.agify.io/?name=${name}`)
      const response = await api.data.age
      setAge(response)
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className="App">
      <p>Essa API tem a funcionalidade de descobrir a sua idade pelo o seu nome. Basta digitar o seu nome e ver quantos anos você tem!</p>
      <input type='text' placeholder={'Digite o seu nome'} value={name} onChange={(e) => { setName(e.target.value)}}/>
      <button onClick={handleGuessAge}>Descubra sua idade</button>
      <p>A sua idade é: {age}</p>
    </div>
  )
}

export default App
