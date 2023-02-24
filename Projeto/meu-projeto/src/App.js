import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Ezequiel';
  const newName = name.toUpperCase();
  function sum(a,b){
    return a+b;
  }
  const url = "http://via.placeholder.com/150";
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <p>Olá, {newName}</p>
      <p>Soma: {2 + 2}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
