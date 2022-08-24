

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
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
