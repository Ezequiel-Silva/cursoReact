<h1 align="center"> Trabalhando com props </h1>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
<img src="https://img.shields.io/static/v1?label=Linguagem de programação&message=React&color=d3d523&style=for-the-badge&logo=React"/>
</p>

<p>

* As props são valores passados para componentes;
* Podemos deixá-los dinâmicos;
* Ou seja, mudando a execução por causa do valor da prop;
* O valor é passado como um atributo na chamada do componente;
* E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente;
* As props são somente de leitura!

</p>

<hr/>

<p>

* A propriedade é passada para um componente (SayMyName), e utilizada como um objeto (props.name)
>function SayMyName(props){
>    return (
>        <div>
>            <p>Fala aí {props.nome}, suave?</p>
>        </div>
>    )
>}
>export default SayMyName;
</p>
<hr/>
<p>

* No App.js temos a importação do componente, e passamos o argumento nome para o componente SayMyName
>import './App.css';
>import HelloWorld from './components/HelloWorld';
>import SayMyName from './components/SayMyName';
>
>function App() {
>  return (
>    <div className="App">
>      <HelloWorld/>
>      <SayMyName nome="Matheus"/>
>    </div>
>  );
>}
>
>export default App;
</p>
<hr/>
<p>

* No componente Pessoa foi passado várias props como: foto,nome,idade e profissão)
>function Pessoa(props){
>    return (
>        <div>
>            <img src={props.foto} alt={props.nome}/>
>            <h2>Nome: {props.nome}</h2>
>            <p>Idade: {props.idade}</p>
>            <p>Profissao: {props.profissao}</p>
>        </div>
>    )
>}
>export default Pessoa;
</p>
<hr/>
<p>

* Desestruturando o objeto props, que facilita na tarefa de extração de valores referentes a um determinado objeto;
* No componente Pessoa:
>function Pessoa({foto,nome,idade,profissao}){
>    return (
>        <div>
>            <img src={foto} alt={nome}/>
>            <h2>Nome: {nome}</h2>
>            <p>Idade: {idade}</p>
>            <p>Profissao: {profissao}</p>
>        </div>
>    )
>}
>export default Pessoa;
</p>
<hr/>