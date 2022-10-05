import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

// const options = {
//   method: 'GET',
//   url: 'https://agify-io.p.rapidapi.com/',
//   params: {name: '<>', apikey: '<>'},
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'agify-io.p.rapidapi.com'
//   }
// };


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  return (
    <div className="App">
        <button>Descubra a sua idade</button>
    </div>
  );
}

export default App;