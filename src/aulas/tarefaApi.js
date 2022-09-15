import React, { useState, useEffect } from 'react';
function App(){
const [jokes, setJokes] = useState([]);


//instalçar json viewer
useEffect (()=>{
    // console.log("useEffect");
    let url = "https://official-joke-api.appspot.com/";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.joke);
        setJokes(json.joke);
    })
},[]);
  return(
    <div>
      <h1>Consultado API</h1>
      <ul>
        {jokes.map( joke => (
          <li key={joke.id}>{joke.setup} - {joke.punchline}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;