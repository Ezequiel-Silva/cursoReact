import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Matheus"/>
    </div>
  );
}

export default App;
